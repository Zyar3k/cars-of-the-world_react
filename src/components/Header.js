import { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

import { GlobalContext } from "../context/GlobalContext";

import styles from "./Header.module.scss";

const Header = () => {
  const { searchCar, clearFilter } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      searchCar(searchValue);
    } else {
      clearFilter();
    }
  }, [searchValue]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerItem}>
          <RiSearch2Line />
          <input
            type="text"
            placeholder="Search by brand"
            onChange={handleChange}
          />
        </div>
        <div className={styles.headerItem}>
          <Link to="/">
            <h1>
              <IoCarSport />
              Cars
            </h1>
          </Link>
        </div>
        <div className={styles.headerItem}>
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
