import { createContext } from "react";

const SpaceflightContext = createContext();

const SpaceflightProvider = ({ children }) => {
  const value = {};
  return (
    <SpaceflightContext.Provider value={value}>
      {children}
    </SpaceflightContext.Provider>
  );
};

export { SpaceflightProvider, SpaceflightContext };
