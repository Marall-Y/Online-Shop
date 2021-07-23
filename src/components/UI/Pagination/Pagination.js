import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, itemsCount, changePage, currentPage }) => {
  let pageCount = itemsCount / pageSize;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a href="#" className="page-link" onClick={() => changePage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
