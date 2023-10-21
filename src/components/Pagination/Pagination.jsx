import useSpaceflight from "../../hooks/useSpaceflight";

const Pagination = () => {
  const { currentPage, changePage, itemsPerPage, spaceCraft } =
    useSpaceflight();

  const totalPages = Math.ceil(spaceCraft.length / itemsPerPage);

  const handlePageClick = (page) => {
    changePage(page);
  };

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center align-items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index + 1}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
