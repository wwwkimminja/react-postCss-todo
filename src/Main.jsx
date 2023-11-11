import React, { useMemo, useReducer } from 'react'
import styles from './Main.module.css'
import Item from './Item'
import { todoReducer } from './reducer/todo-reducer'


function Main({filterType}) {
  const [todoList,dispatch]=useReducer(todoReducer,fetched)

  const handleDelete = (id)=>{
    dispatch({type:'deleted',id})
  }
  const handleType = (item)=>{
    const state = item.state === "doing"?"done":"doing"
    dispatch({type:"updated",id:item.id, state})
  }


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
          <Item  key={v.id} item={v} handleDelete={handleDelete} handleCheck={handleType}/>
        )
      }
    </ul>
  )
}


const fetched = [
  {
    id:"1",
    state:"doing",
    content:"cleaning",
  },
  {
    id:"2",
    state:"done",
    content:"cleaning",
  },
  {
    id:"3",
    state:"doing",
    content:"jogging",
  },
  {
    id:"4",
    state:"doing",
    content:"homework",
  },

]
export default Main