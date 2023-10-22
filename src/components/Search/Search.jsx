import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSpaceflight from "../../hooks/useSpaceflight";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setCurrentPage, setSpaceCraft, originalSpaceCraft } =
    useSpaceflight();

  const handleSearch = () => {
    setCurrentPage(1);

    if (searchQuery.trim() === "") {
      setSpaceCraft(originalSpaceCraft);
    } else {
      // * Filter the spaceCraft based on the search query
      const filteredSpaceCraft = originalSpaceCraft.filter((item) => {
        return item.rocket.rocket_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
      setSpaceCraft(filteredSpaceCraft);
    }
  };

  return (
    <div className="input-group">
      <input
          type="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search..."
          className="form-control"
        />
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
