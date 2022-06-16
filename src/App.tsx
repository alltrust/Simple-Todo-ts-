import React,{useState} from 'react';
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

import styles from "./App.module.css";

// const todos = [new Todo("learn React"), new Todo("Learn Type")];
function App() {
  const [todoState, setTodoState] = useState<Todo[]>([]);

  const addTodoHandler = (userText: string)=>{
    const newTodo = new Todo(userText);

    setTodoState((prevTodoState)=>{
      const newTodoList= [...prevTodoState, newTodo];
      return newTodoList
    })
    

  }


  return (
    <div className={styles.App}>
      <NewTodo onAddTodo ={addTodoHandler}/>
      <Todos items={todoState} />
    </div>
  );
}

export default App;
