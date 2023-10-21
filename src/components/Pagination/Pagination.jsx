import { useEffect } from "react";
import useSpaceflight from "../../hooks/useSpaceflight";

const Pagination = () => {
  const { currentPage, changePage, itemsPerPage, spaceCraft } =
    useSpaceflight();

  const totalPages = Math.ceil(spaceCraft.length / itemsPerPage);

  const handlePageClick = (page) => {
    changePage(page);
  };

  const visiblePageCount = 6;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    if (totalPages <= visiblePageCount) {
      // If there are fewer pages than visiblePageCount, display all page numbers.
      return pageNumbers;
    } else {
      // Calculate which page numbers to display, considering ellipsis.
      const halfVisibleCount = Math.floor(visiblePageCount / 2);
      const firstPage = Math.max(1, currentPage - halfVisibleCount);
      const lastPage = Math.min(totalPages, firstPage + visiblePageCount - 1);

      // Add ellipsis if needed.
      const result = [];
      if (firstPage > 1) {
        result.push(1);
        if (firstPage > 2) {
          result.push("...");
        }
      }
      for (let i = firstPage; i <= lastPage; i++) {
        result.push(i);
      }
      if (lastPage < totalPages) {
        if (lastPage < totalPages - 1) {
          result.push("...");
        }
        result.push(totalPages);
      }

      return result;
    }
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
              {renderPageNumbers().map((pageNumber, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {pageNumber}
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
