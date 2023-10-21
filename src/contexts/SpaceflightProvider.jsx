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
  const [isChecked, setIsChecked] = useState(false);

  // * Items per page
  const itemsPerPage = 9;
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let pagedSpaceCraft;

  const spaceCraftSlice = spaceCraft.slice(startIndex, endIndex);

  if (spaceCraftSlice.length) {
    pagedSpaceCraft = spaceCraftSlice;
  } else {
    pagedSpaceCraft = spaceCraft;
  }

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

  const handleCheckboxChange = () => {
    setIsChecked((isChecked) => !isChecked);
    if (!isChecked) {
      const upcomingSpaceCraft = originalSpaceCraft.filter(
        (item) => item.upcoming
      );
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
    isChecked,
    handleCheckboxChange,
  };

  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
