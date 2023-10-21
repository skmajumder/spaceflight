const SpaceflightItem = ({ item }) => {
  return <li className="col-lg-4">{item?.mission_name}</li>;
};

export default SpaceflightItem;
