import Search from "../Search/Search";
import Select from "../Select/Select";

const Filters = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-4">
          <Search />
        </div>
        <div className="col-lg-6 offset-lg-2">
          <div className="d-flex gap-4 justify-content-between align-items-center">
            <Select>By Launch Status</Select>
            <Select>By Launch Date</Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
