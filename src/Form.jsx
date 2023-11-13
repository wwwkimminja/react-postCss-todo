import React, { useContext, useState } from 'react'
import styles from './Form.module.css'
import { TodoListContext } from './context/TodoListContext';

function Form() {
  const [todo,setTodo]= useState('');


 const {handleAdd} = useContext(TodoListContext)
 const handleSubmit = (e)=>{
  e.preventDefault()
  if(todo.trim().length === 0){
    return;
  }
  handleAdd(todo)
  return setTodo('')
 }
 const handleChange = (e)=>{
  setTodo(e.target.value)
 }
 

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" className={styles.input} value = {todo} onChange={handleChange} placeholder='add todo'/>
      <button type='submit'>Save</button>
    </form>
  )
}

export default Form