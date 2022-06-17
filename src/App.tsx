import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import styles from "./App.module.css";
import TodosContexProvider from "./store/TodosContext";

// const todos = [new Todo("learn React"), new Todo("Learn Type")];
function App() {
  return (
    <TodosContexProvider>
      <div className={styles.App}>
        <NewTodo />
        <Todos />
      </div>
    </TodosContexProvider>
  );
}

export default App;
