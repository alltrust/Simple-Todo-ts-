import React, { FormEvent, useRef, FC } from "react";
import styles from './NewTodo.module.css';


type AddTodo ={
    onAddTodo: (todoText: string)=> void;
}

const NewTodo:FC<AddTodo> = ({onAddTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const userEnteredText = inputRef.current!.value;

    if (userEnteredText.trim().length === 0) {
      //throw error
      // throw new Error ('field is empty')
      return;
    }

    onAddTodo(userEnteredText)


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
