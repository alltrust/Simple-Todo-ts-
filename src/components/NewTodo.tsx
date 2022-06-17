import React, { FormEvent, useRef,useContext, FC } from "react";
import { TodosContext } from "../store/TodosContext";
import styles from './NewTodo.module.css';



const NewTodo:FC = () => {

  const todoCtx = useContext(TodosContext)

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const userEnteredText = inputRef.current!.value;

    if (userEnteredText.trim().length === 0) {
      //throw error
      // throw new Error ('field is empty')
      return;
    }

    todoCtx.addItems(userEnteredText)


  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={inputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
