import React, { FC, useContext } from "react";
import { TodosContext } from "../store/TodosContext";

import TodoItem from "./TodoItem";

import styles from './Todos.module.css'


const Todos: FC = () => {
  const todoCtx = useContext(TodosContext)
  return (
    <div className={styles.listOfTodos}>
      <ul>
        {todoCtx.items.map((item) => (
          <TodoItem key={item.id} text={item.text} removeTodo={todoCtx.removeItems.bind(null, item.id)}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
