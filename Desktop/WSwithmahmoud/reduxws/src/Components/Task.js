import React from 'react'
import { Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux/es/exports'
import { handelDone } from '../Redux/Actions'


const Task =({task})=>{
    const dispatch =useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Title>{task.isdone ?'true':'false'}</Card.Title>
        <Button onClick={()=>dispatch(handelDone(task.id))} variant="secondary">{task.isdone? 'undone':'done'} </Button>{' '}
    
    </Card.Body>
    </Card>
  )
}

export default Task
