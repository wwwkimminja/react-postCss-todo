import React, { useContext, useMemo } from 'react'
import styles from './Main.module.css'
import Item from './Item'
import { TodoListContext } from './context/TodoListContext'


function Main({filterType}) {
  const {todoList,handleDelete,handleState} = useContext(TodoListContext)

  const filterd = getFilteredItem(todoList,filterType)

  return (
    <ul className={styles.container} >
      {
        filterd.map((v)=>
          <Item  key={v.id} item={v} handleDelete={handleDelete} handleCheck={handleState}/>
        )
      }
    </ul>
  )
}

const getFilteredItem=(todos,filter)=>{
  if(filter ==='all'){
    return todos;
  }
  return todos.filter(todo=>todo.state ===filter)
}

export default Main