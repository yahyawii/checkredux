import { useSelector } from "react-redux/es/exports";
import Task from "./Task";
import { useState } from "react";

const List =()=>{
    const tasks=useSelector(state=>state.tasks)
    const [marwa,setMarwa]=useState('all')
    return(
        <div className="list">
            <button onClick={()=>setMarwa('all')}>ALL</button>
            <button onClick={()=>setMarwa('done')}>Done</button>
            <button onClick={()=>setMarwa('undone')}>Not Done</button>
            {
                marwa=='all'?
                tasks.map(task=> <Task task={task}/>)
                : marwa=='done' ?
                tasks.filter(task=>task.isdone==true).map(task=> <Task task={task}/>)
                : 
                tasks.filter(task=>task.isdone==false).map(task=> <Task task={task}/>)

            }
        </div>
    )
}
export default List