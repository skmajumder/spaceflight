import Search from "../Search/Search";
import Select from "../Select/Select";

const Filters = () => {
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
            <Select options={launchStatusOptions} />
            <Select options={launchDateOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
