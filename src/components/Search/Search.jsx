import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input type="Search" placeholder="search..." className="form-control" />
      </div>
      <button type="button" className="btn btn-primary">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
