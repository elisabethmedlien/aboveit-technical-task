
import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/Header.js'
import Table from './components/Table.js'
import Pagination from './components/Pagination.js'

import { fetchAPI } from "./functions/common.js";

function App() {

  let [ data, setData ] = useState([]);
  let [ time, setTime ] = useState({from: 0, to: 0});
  let [ currentPage, setCurrentPage ] = useState(1);
  let [ numberOfPages, setNumberOfPages ] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => fetchAPI().then(res => { setData(_=> res.Data); setTime({to: res.TimeTo, from: res.TimeFrom }) }), []);     // get api json
  useEffect(() => setNumberOfPages(Math.ceil(data.length/itemsPerPage)),[data]);                                              // update number of pages on data state changes
  
  let indexLast = currentPage * itemsPerPage;
  let indexFirst = indexLast - itemsPerPage;

  let pageChange = page => setCurrentPage(page);
  let nextPage = _ => (currentPage !== numberOfPages ? setCurrentPage(currentPage + 1) : null);
  let previousPage = _ => (currentPage !== 1 ? setCurrentPage(currentPage - 1) : null);

  return (
    <div className="App">
      <Header time={time} />
      <Table data={data} indexFirst={indexFirst} indexLast={indexLast} />
      <Pagination handleChangePage={pageChange} handleNextPage={nextPage} handlePreviousPage={previousPage}  currentPage={currentPage} numberOfPages={numberOfPages} />
    </div>
  );
}

export default App;