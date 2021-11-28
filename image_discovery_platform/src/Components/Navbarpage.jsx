import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchData } from '../Redux/action'
import styles from "../Components/styles/styles.module.css";


const Navbar = () => {
    const [query,setQuery]=useState("")
    const [timer,setTimer]=useState(undefined)


    const dispatch=useDispatch()
    const handlesearch=(e)=>{
        if(timer){
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(()=>{
                dispatch(searchData(e.target.value))
                console.log("debounce=",e.target.value);

            },300)
        )
        
    }

     
   
    

    return (
        <>
        <div className={styles.parentinput}  >

           <div className={styles.inputclass} >
           <input type="search"  onKeyUp={handlesearch} placeholder="search"/>
            {/* <button onClick={handlesearch}>search</button> */}
           </div>


           </div>

        
      

        
        </>
    )
}

export default Navbar
