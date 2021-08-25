
const Pagination = (props) => {

  let { handleNextPage, handlePreviousPage, handleChangePage } = props;


  return (
    <div className="pagination">
      <button onClick={_ => handlePreviousPage()}>Previous Page</button>

      {Array.from(Array(props.numberOfPages+1).keys()).slice(1).map(page => 
        <button 
          key={page}
          className={props.currentPage === page ? "selected": ""} 
          onClick={_ => handleChangePage(page)} 
        >
          {page}
        </button>
      )}

      <button onClick={_ => handleNextPage()}>Next page</button>
      </div>
  )
};



export default Pagination;