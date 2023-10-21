import { useContext } from "react";
import { SpaceflightContext } from "../contexts/SpaceflightProvider";

const useSpaceflight = () => {
  const context = useContext(SpaceflightContext);

  if (context === undefined)
    throw new Error(
      "SpaceflightContext was used outside of the SpaceflightProvider"
    );

  return context;
};

export default useSpaceflight;
