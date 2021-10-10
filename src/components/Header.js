import { Link } from "react-router-dom";

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
            <button>Add car</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
