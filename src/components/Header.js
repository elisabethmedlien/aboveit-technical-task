import { convertToDate } from "../functions/common.js";

const Header = props => {
  let { time } = props;

  return (
    <hgroup>
      <h1>Crypto currency stock market</h1>
      <h2>Data from { convertToDate(time.from) } to { convertToDate(time.to) } </h2>
    </hgroup>
  )
};

export default Header;