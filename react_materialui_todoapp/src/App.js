import React, {useState, useEffect } from 'react';
import Todo from './Todo'
import { Button, FormControl,Input, InputLabel,} from '@material-ui/core'

import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');
  
  // we gonna use firebase database to fetch new todos data that user input in addtodo/remove also

 useEffect(() => {
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
   })

 }, []);

  const addTodo = (event) => {
    //this will fireup the when we click on button
    event.preventDefault();/// will stop refresh the page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })



    
    setTodos([...todos, input]);
    setInput(''); // clearing the input when pressing enter
    


  }


  return (
    <div className="App">
      <h1>🔥✨React Material-UI TodoApp With Firebase✨🔥 </h1>

      

      <form>
        <FormControl>
          <InputLabel> ✔️Write Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

      
      <Button disabled={!input} type="submit" onClick={addTodo}variant="contained" color='primary'> 😃Add Todo</Button>
      

      </form>
      

      
      


      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          
        ))}
      
      </ul>
 

    </div>
  );
}


export default App;
