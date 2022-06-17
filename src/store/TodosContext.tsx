import React,{createContext,useState, FC} from 'react'
import Todo from "../models/Todo";

type TodoCtx ={
    items:Todo[],
    addItems: (text:string)=> void,
    removeItems: (id:string)=> void,
}

type Props={
    children: React.ReactNode
}

export const TodosContext= createContext<TodoCtx>({
    items:[],
    addItems: (text: string)=>{},
    removeItems: (id: string)=>{}
}
)

const TodosContexProvider:FC<Props>= ({children})=>{
    const [todoState, setTodoState] = useState<Todo[]>([]);

  const addTodoHandler = (userText: string)=>{
    const newTodo = new Todo(userText);

    setTodoState((prevTodoState)=>{
      const newTodoList= [...prevTodoState, newTodo];
      return newTodoList
    })
  }

  const removeItemHandler = (todoId:string)=>{
    setTodoState((prevState)=>{
     return prevState.filter((todo)=>{
        todo.id !== todoId
      })
    })
  }

  //recieves the TodoCtx as alias
  const allTodos:TodoCtx= {
    items: todoState,
    addItems: addTodoHandler,
    removeItems: removeItemHandler
  }

    return(
        <TodosContext.Provider value={allTodos}>
            {children}
        </TodosContext.Provider>
    )

};

export default TodosContexProvider