import { useState } from "react"
import { useDispatch } from "react-redux"
import { handelAdd } from "../Redux/Actions"
const Add=()=>{
    const dispatch=useDispatch()
    const  [title,setTitle]=useState('')
    return(
        <>
       <input onChange={(e)=>setTitle(e.target.value)} type='Text'/>

       <button onClick={()=>dispatch(handelAdd({title,id:Math.random(),isdone :false}))}>Add</button>
       </>

    )
}

export default Add