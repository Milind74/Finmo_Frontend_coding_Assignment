import React, { useEffect } from "react";
import Navbar from "./Navbarpage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import styles from "../Components/styles/styles.module.css";

const Dashboard = () => {
  const state = useSelector((state) => state.PhotosData.results);
  console.log("state=", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className={styles.parentcont}>
        {state &&
          state.map((item) => {
            return (
              <div className={styles.containerchild2}>
                <img src={item.urls.small} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dashboard;
