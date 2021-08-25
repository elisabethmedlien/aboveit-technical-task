import TableData from './TableData.js'

const Table = props => {

  let { data, indexFirst, indexLast } = props;

  return (
    <table>
      <thead>
        <tr>
          <th> Date</th>
          <th> High </th>
          <th> Low </th>
          <th> Open </th>
          <th> Volume from </th>
          <th> Volume to </th>
          <th> Close </th>
        </tr>
      </thead>
      <tbody>

        {data
        .sort((a,b)=> b.time - a.time)  // order by newest date first
        .slice(indexFirst, indexLast)   // selects 20 items per page 
        .map(item => {
          return <TableData key={item.time} data={item} />
        })}
        
      </tbody>
    </table>
  )

};

export default Table;