import React, { useState } from 'react'
import styles from './Form.module.css'

function Form({onAdd}) {
  const [todo,setTodo]= useState('');


 const handleSubmit = (e)=>{
  e.preventDefault()
  if(todo.trim().length === 0){
    return;
  }
  onAdd(todo)
  return setTodo('')
 }
 const handleChange = (e)=>{
  setTodo(e.target.value)
 }
 

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text"  className={styles.input} value = {todo} onChange={handleChange} placeholder='add todo'/>
      <button type='submit' className={styles.button}>Save</button>
    </form>
  )
}

export default Form