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

  const [optionLaunchStatus, setOptionLaunchStatus] = useState(0);
  const [optionLaunchDate, setOptionLaunchDate] = useState(0);

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
      setOptionLaunchStatus(0);
    } else {
      setSpaceCraft(originalSpaceCraft);
    }
  };

  useEffect(() => {
    if (optionLaunchStatus === 0) {
      setSpaceCraft(originalSpaceCraft);
    }
    if (optionLaunchStatus === 1) {
      const launchStatusFailed = originalSpaceCraft.filter(
        (item) => item.launch_success === false
      );
      setSpaceCraft(launchStatusFailed);
    }
    if (optionLaunchStatus === 2) {
      const launchStatusSuccess = originalSpaceCraft.filter(
        (item) => item.launch_success === true
      );
      setSpaceCraft(launchStatusSuccess);
    }

    return () => {};
  }, [optionLaunchStatus, originalSpaceCraft]);

  useEffect(() => {
    if (optionLaunchDate === 1) {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const filteredItems = originalSpaceCraft.filter(
        (item) => new Date(item.launch_date_utc) > oneWeekAgo
      );
      setSpaceCraft(filteredItems);
    } else if (optionLaunchDate === 2) {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const filteredItems = originalSpaceCraft.filter(
        (item) => new Date(item.launch_date_utc) > oneMonthAgo
      );
      setSpaceCraft(filteredItems);
    } else if (optionLaunchDate === 3) {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const filteredItems = originalSpaceCraft.filter(
        (item) => new Date(item.launch_date_utc) > oneYearAgo
      );
      setSpaceCraft(filteredItems);
    } else if (optionLaunchDate === 0) {
      setSpaceCraft(originalSpaceCraft);
    }

    return () => {};
  }, [optionLaunchDate, originalSpaceCraft]);

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
    optionLaunchStatus,
    optionLaunchDate,
    setOptionLaunchStatus,
    setOptionLaunchDate,
  };

  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
