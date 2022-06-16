import React, { FC } from "react";

import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from './Todos.module.css'

type ListOfTodos ={
  items: Todo[]
}

const Todos: FC<ListOfTodos> = ({items}) => {
  return (
    <div className={styles.listOfTodos}>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} text={item.text}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
