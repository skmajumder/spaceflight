import useSpaceflight from "../../hooks/useSpaceflight";
import Message from "../Message/Message";
import SpaceflightItem from "../SpaceflightItem/SpaceflightItem";
import Spinner from "../Spinner/Spinner";

const SpaceflightList = () => {
  const { spaceCraft, isLoading } = useSpaceflight();

  if (isLoading) return <Spinner />;

  if (!spaceCraft.length)
    return (
      <Message message="No data available now, please refresh the page again or check your internet connection" />
    );

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <ul className="row list-unstyled">
              {spaceCraft.map((item) => (
                <SpaceflightItem key={item.mission_name} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default SpaceflightList;
