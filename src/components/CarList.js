import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

import styles from "./CarList.module.scss";

const CarList = () => {
  const { cars, deleteCar, filtered, sortBy, desc } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(cars);

  useEffect(() => {
    if (filtered === null) {
      setDisplayData(cars);
    } else {
      setDisplayData(filtered);
    }
  }, [cars, filtered]);

  return (
    <div className={`container ${styles.carListContainer}`}>
      {cars.length !== 0 ? (
        <div className={styles.carList}>
          <div className={styles.listHeader}>
            <div className={`${styles.carBrand} ${styles.itemHeader}`}>
              <h3>
                Brand
                <span name="brand" onClick={() => sortBy("brand", desc)}>
                  <GoTriangleDown />
                </span>
              </h3>
            </div>
            <div className={`${styles.carModel} ${styles.itemHeader}`}>
              <h3>
                Model
                <span name="model" onClick={() => sortBy("model", desc)}>
                  <GoTriangleDown />
                </span>
              </h3>
            </div>
            <div className={`${styles.carYear} ${styles.itemHeader}`}>
              <h3>
                Year
                <span name="year" onClick={() => sortBy("year", desc)}>
                  <GoTriangleDown />
                </span>
              </h3>
            </div>
            <div className={styles.buttonsWrapper}>
              <h3>Options</h3>
            </div>
          </div>
          {displayData.map((car) => (
            <div className={styles.carItem} key={car.id}>
              <div className={styles.carBrand}>
                <h3>{car.brand}</h3>
              </div>
              <div className={styles.carModel}>
                <h3>{car.model}</h3>
              </div>
              <div className={styles.carYear}>
                <h3>{car.year}</h3>
              </div>
              <div className={styles.buttonsWrapper}>
                <Link to={`/edit/${car.id}`}>
                  <button className={styles.btnEdit}>
                    <BiEdit />
                  </button>
                </Link>
                <button
                  onClick={() => deleteCar(car.id)}
                  className={styles.btnDelete}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>No cars on the list... add some</h3>
      )}
    </div>
  );
};

export default CarList;
