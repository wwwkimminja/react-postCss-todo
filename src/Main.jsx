import React, { useContext, useMemo } from 'react'
import styles from './Main.module.css'
import Item from './Item'
import { TodoListContext } from './context/TodoListContext'


function Main({filterType}) {
  const {todoList,handleDelete,handleState} = useContext(TodoListContext)


  const itemList = useMemo(()=>{
    if(filterType ==="all") {
      return todoList
    }
    return todoList.filter(item=>item.state === filterType)
    

  },[filterType,todoList])

  return (
    <ul className={styles.container} >
      {
        itemList.map((v)=>
          <Item  key={v.id} item={v} handleDelete={handleDelete} handleCheck={handleState}/>
        )
      }
    </ul>
  )
}

export default Main