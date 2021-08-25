import { convertToDate } from "../functions/common.js";

const TableData = props => {

  let { time, high, low, open, volumefrom, volumeto, close} = props.data;

  return (
    <tr>
      <td> {convertToDate(time)} </td>
      <td> {high} </td>
      <td> {low} </td>
      <td> {open} </td>
      <td> {volumefrom} </td>
      <td> {volumeto} </td>
      <td> {close} </td>
    </tr>
  );
}

export default TableData;