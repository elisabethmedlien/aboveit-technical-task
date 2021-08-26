
const Pagination = (props) => {

  let { handleNextPage, handlePreviousPage, handleChangePage, currentPage, numberOfPages } = props;

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={_ => handlePreviousPage()}>Previous Page</button>

        {Array
        .from(Array(props.numberOfPages+1).keys())    // creates an array with n+1 indexes, and names them by index
        .slice(1)                                     // remove zero 
        .map(page => 
          <button
            key={page}
            className={currentPage === page ? "selected": ""} 
            onClick={_ => handleChangePage(page)} 
          >
            {page}
          </button>
        )}

      <button disabled={currentPage === numberOfPages} onClick={_ => handleNextPage()}>Next page</button>
    </div>
  )
};

export default Pagination;