import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchData } from '../Redux/action'
import styles from "../Components/styles/styles.module.css";


const Navbar = () => {
    const [query,setQuery]=useState("")
    const dispatch=useDispatch()

    const handlesearch=()=>{
        dispatch(searchData(query))
    }

    return (
        <>
        <div className={styles.parentinput}  >

           <div className={styles.inputclass} >
           <input type="text" value={query}  onChange={(e)=>setQuery(e.target.value)} placeholder="search"/>
            <button onClick={handlesearch}>search</button>
           </div>


           </div>

        
      

        
        </>
    )
}

export default Navbar
