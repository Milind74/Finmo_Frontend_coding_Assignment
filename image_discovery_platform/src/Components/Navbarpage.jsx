import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchData } from '../Redux/action'


const Navbar = () => {
    const [query,setQuery]=useState("")
    const dispatch=useDispatch()

    const handlesearch=()=>{
        dispatch(searchData(query))
    }

    return (
        <>
        <div style={{border:"1px solid black",height:"40px",width:"100%",display:"flex",justifyContent:"space-evenly"}}>
           <div >
           <input style={{height:"30px"}} type="text" value={query}  onChange={(e)=>setQuery(e.target.value)} placeholder="search"/>
            <button onClick={handlesearch}>search</button>
           </div>
        
        </div>
      

        
        </>
    )
}

export default Navbar
