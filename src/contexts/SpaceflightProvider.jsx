import { createContext, useEffect, useState } from "react";

const SpaceflightContext = createContext();

const BASE_URL = "https://api.spacexdata.com";

const SpaceflightProvider = ({ children }) => {
  const [spaceCraft, setSpaceCraft] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const value = { spaceCraft, isLoading };

  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
