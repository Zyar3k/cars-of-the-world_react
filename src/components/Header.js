import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerItem">
          <input type="text" placeholder="Search by brand" />
        </div>
        <div className="headerItem">
          <Link to="/">
            <h1>Cars</h1>
          </Link>
        </div>
        <div className="headerItem">
          <Link to="/add">
            <button>
              <IoMdAdd />
              Add car
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
