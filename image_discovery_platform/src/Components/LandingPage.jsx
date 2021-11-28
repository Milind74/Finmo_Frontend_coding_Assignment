import React, { useEffect } from "react";
import Navbar from "./Navbarpage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";


const Dashboard = () => {
    const state = useSelector((state) => state.PhotosData.results);
    console.log("state=",state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>dashboard</h1>
        <div>
          {state && state.map((item) => {
            return (
              <div  key={item.id}>
                <div>
                  <img height="200px" src={item.urls.regular} alt="" />

                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
