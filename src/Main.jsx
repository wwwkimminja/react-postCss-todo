import React, { useContext, useMemo } from 'react'
import styles from './Main.module.css'
import Item from './Item'
import { TodoListContext } from './context/TodoListContext'
import Form from './Form'


function Main({filterType}) {
  const {todoList,handleDelete,handleState,handleAdd} = useContext(TodoListContext)

  const filterd = getFilteredItem(todoList,filterType)

  return (
    <section className={styles.container}>
    <ul className={styles.list}>
      {
        filterd.map((v)=>
        <Item  key={v.id} item={v} onDelete={handleDelete} onUpdate={handleState}/>
        )
      }
    </ul>
    <Form onAdd={handleAdd}/>
    </section>
  )
}

const getFilteredItem=(todos,filter)=>{
  if(filter ==='all'){
    return todos;
  }
  return todos.filter(todo=>todo.state ===filter)
}

export default Main