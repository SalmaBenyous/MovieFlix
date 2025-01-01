import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';

function PaginationMovies({ getPage, totalPages,word,totalPagesTosearch }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1); // Page number is 0-based, API uses 1-based
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <ReactPaginate
    //   breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={word !== "" ? totalPagesTosearch : totalPages} // Dynamically set page count
      previousLabel="< previous"
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      breakClassName={"page-item"}
      activeClassName={"active"}
      containerClassName={"pagination justify-content-center p-3"}
    />
  );
}

export default PaginationMovies;
