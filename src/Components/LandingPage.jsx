import React, { useEffect, useState,useRef } from "react";
import Navbar from "./Navbarpage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import styles from "../Components/styles/styles.module.css";
import Modal from "@mui/material/Modal";

const Dashboard = () => {
  const [open, setOpen] = useState(false); //hook for modal
  const [image, setImage] = useState(""); //hook for modal
  const state = useSelector((state) => state.PhotosData.results); // useSelector hook used to select  the data from store
  const dispatch = useDispatch(); //deispath function used to dispatch an action over here

  //dispatching an action over here inside useffect so that it would rended after component mount
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //modal logic
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleimage = (loading) => {
    setImage(loading);
    handleOpen();
  };


  //logic for icons

  const handleicon=useRef(null)

  const icontoggle=()=>{
    if(handleicon.current.style.color==="red"  ){
   handleicon.current.style.color="white" 
  }
  else{
    handleicon.current.style.color="red" 

  }
}



  
  return (
    <>
      {/* //calling navbar over here */}
      <div>
        <Navbar />
      </div>

      {/* //using state to map and display the data */}
      <div className={styles.parentcont}>
        {state &&
          state.map((item) => {
            return (
              <div key={item.id} className={styles.containerchild2}>
                <img
                  src={item.urls.small}
                  onClick={() => {
                    handleimage(item.urls.regular);
                  }}
                  alt=""
                />
              </div>
            );
          })}
      </div>
      {/* //logic for modal written over here */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.loadingimg}>
            <img src={image} alt="loading"></img>
          </div>
          <div ref={handleicon} className={styles.icons}>
            <i  onClick={()=>icontoggle()} className={styles.icon} className="fas fa-heart"></i>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
