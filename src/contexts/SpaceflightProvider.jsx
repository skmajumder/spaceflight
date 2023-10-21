import { createContext, useEffect, useState } from "react";

const SpaceflightContext = createContext();

const BASE_URL = "https://api.spacexdata.com";

const SpaceflightProvider = ({ children }) => {
  const currentPageFromStorage = localStorage.getItem("currentPage");

  const [spaceCraft, setSpaceCraft] = useState([]);
  const [originalSpaceCraft, setOriginalSpaceCraft] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    currentPageFromStorage ? parseInt(currentPageFromStorage, 10) : 1
  );

  // * Items per page
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedSpaceCraft = spaceCraft.slice(startIndex, endIndex);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchSpaceCraft() {
      setIsLoading(true);
      try {
        const request = await fetch(`${BASE_URL}/v3/launches`, {
          signal: controller.signal,
        });

        if (!request.ok) throw new Error("Something went wrong while fetching");

        const response = await request.json();
        setSpaceCraft(response);
        setOriginalSpaceCraft(response);

        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    }

    fetchSpaceCraft();

    return () => {
      controller.abort();
    };
  }, []);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    localStorage.setItem("currentPage", newPage);
  };

  const onCheckboxChange = (isChecked) => {
    if (isChecked) {
      const upcomingSpaceCraft = spaceCraft.filter((item) => item.upcoming);
      setSpaceCraft(upcomingSpaceCraft);
    } else {
      setSpaceCraft(originalSpaceCraft);
    }
  };

  const value = {
    spaceCraft,
    setSpaceCraft,
    isLoading,
    currentPage,
    changePage,
    itemsPerPage,
    pagedSpaceCraft,
    setCurrentPage,
    originalSpaceCraft,
    onCheckboxChange,
  };

  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
