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
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageClick(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
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
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageClick(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
