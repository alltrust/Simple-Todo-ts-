import React, { FC, MouseEvent } from "react";
import styles from './TodoItem.module.css'

type TodoListItem = {
  // key: string;
  text: string
  removeTodo: ()=> void
};

const TodoItem: FC<TodoListItem> = ({ text, removeTodo }) => {
  
  return (
    <div className={styles.TodoItem}>
      <li onClick={removeTodo}>{text}</li>
    </div>
  );
};

export default TodoItem;
