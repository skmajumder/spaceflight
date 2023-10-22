import useSpaceflight from "../../hooks/useSpaceflight";
import Checkbox from "../Checkbox/Checkbox";
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
      <div className="row row-gap-sm-3 row-gap-3">
        <div className="col-lg-4 col-md-5 col-sm-12 text-sm-center">
          <Search />
        </div>
        <div className="row d-lg-none d-md-none">
          <div className="col-lg-12">
            <Checkbox alignClass="text-start">Show upcomming only</Checkbox>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-2 col-md-7 offset-md-0 col-sm-12">
          <div className="row row-gap-sm-3 row-gap-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
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
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
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
      </div>
    </section>
  );
};

export default Filters;
