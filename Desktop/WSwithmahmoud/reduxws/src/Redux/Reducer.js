import { HANDELADD, HANDELDONE} from "./Actiontypes"

const initialState = {
tasks :
    [
        {title:'pay internet',id:'1',isdone:true},
        {title:'play weekend league',id:'2',isdone :true},
        {title:'visit parents ',id:'3',isdone :true},
        {title:'props ws',id:'4',isdone :false},
        {title:'football game',id:'5',isdone :false}
      ]
}
const Reducer =(state=initialState,action)=>{
    switch (action.type) {
        case HANDELADD: return {...state,tasks:[...state.tasks,action.payload]}
        case HANDELDONE:return {...state,tasks:state.tasks.map(task=> task.id==action.payload ? {...task,isdone :!task.isdone }:task) }
        
        
        

        default: return state
            
    }

}
export default Reducer