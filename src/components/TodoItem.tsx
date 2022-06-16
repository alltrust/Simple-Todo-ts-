import React, { FC } from "react";
import styles from './TodoItem.module.css'

type TodoListItem = {
  // key: string;
  text: string;
};

const TodoItem: FC<TodoListItem> = ({ text }) => {
  return (
    <div className={styles.TodoItem}>
      <li>{text}</li>
    </div>
  );
};

export default TodoItem;
