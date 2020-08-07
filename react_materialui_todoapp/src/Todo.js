import React from 'react'
import './Todo.css';
import { List,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


import db from './firebase'


function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="👦Any User"/>
                </ListItem>


                <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>


        </List>
        
    )
}

export default Todo
