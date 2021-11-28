import React, { useEffect ,useState} from "react";
import Navbar from "./Navbarpage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import styles from "../Components/styles/styles.module.css";
import Modal from "@mui/material/Modal";

const Dashboard = () => {
    const [open,setOpen]=useState(false)
    const [image, setImage] = useState("")
  const state = useSelector((state) => state.PhotosData.results);
  console.log("state=", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

//modal logic
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

        
        const handleimage=(loading)=>{
            setImage(loading)
          handleOpen()
        }

  return (
    <>
      <div>
        <Navbar />
      </div>

      
      <div className={styles.parentcont}>
        {state &&
          state.map((item) => {
            return (
              <div key={item.id} className={styles.containerchild2}>
                <img  src={item.urls.small}  onClick={()=>{handleimage(item.urls.regular)}} alt="" />
              </div>
            );
          })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div className={styles.modal}>
              <img src={image} alt="error loading image"></img>
          </div>
      </Modal>

    </>
  );
};

export default Dashboard;
