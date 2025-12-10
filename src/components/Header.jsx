import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="header">
        <h1>GenGiphy</h1>
        <div className="icon">
          <h1>
            <FaRegHeart />
          </h1>
          <h1>
            <FaRegUserCircle />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
