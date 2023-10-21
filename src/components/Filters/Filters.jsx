import useSpaceflight from "../../hooks/useSpaceflight";
import Option from "../Option/Option";
import Search from "../Search/Search";

const Filters = () => {
  const {
    optionLaunchStatus,
    optionLaunchDate,
    setOptionLaunchStatus,
    setOptionLaunchDate,
  } = useSpaceflight();

  // * Options for "By Launch Status" Select
  const launchStatusOptions = ["By Launch Status", "Failed", "Success"];

  // * Options for "By Launch Date" Select
  const launchDateOptions = [
    "By Launch Date",
    "Last week",
    "Last month",
    "Last year",
  ];

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-4">
          <Search />
        </div>
        <div className="col-lg-6 offset-lg-2">
          <div className="d-flex gap-4 justify-content-between align-items-center">
            <select
              className="form-select"
              value={optionLaunchStatus}
              onChange={(e) => setOptionLaunchStatus(Number(e.target.value))}
              aria-label="Default select example"
            >
              {launchStatusOptions.map((option, index) => (
                <Option key={option} option={option} value={index} />
              ))}
            </select>
            <select
              className="form-select"
              value={optionLaunchDate}
              onChange={(e) => setOptionLaunchDate(Number(e.target.value))}
              aria-label="Default select example"
            >
              {launchDateOptions.map((option, index) => (
                <Option key={option} option={option} value={index} />
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
