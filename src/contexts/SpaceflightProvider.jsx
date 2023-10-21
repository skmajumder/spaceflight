import { createContext, useEffect, useState } from "react";

const SpaceflightContext = createContext();

const BASE_URL = "https://api.spacexdata.com";

const SpaceflightProvider = ({ children }) => {
  const [spaceCraft, setSpaceCraft] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9; // Items per page

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedSpaceCraft = spaceCraft.slice(startIndex, endIndex);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const value = {
    spaceCraft,
    isLoading,
    currentPage,
    changePage,
    itemsPerPage,
    pagedSpaceCraft
  };

  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
