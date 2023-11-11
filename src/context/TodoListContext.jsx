import { createContext, useReducer, useState } from "react";
import { todoReducer } from "../reducer/todo-reducer";

export const TodoListContext = createContext();

export function TodoListProvider({children }) {


  const [todoList,dispatch]=useReducer(todoReducer,fetched)

  const handleDelete = (id)=>{
    dispatch({type:'deleted',id})
  }
  const handleState = (item)=>{
    const state = item.state === "doing"?"done":"doing"
    dispatch({type:"updated",id:item.id, state})
  }
  const handleAdd = (item)=>{
    dispatch({type:"added",item})
  }

  return (
    <TodoListContext.Provider value={{todoList,handleAdd,handleState,handleDelete}}>
      {children}
    </TodoListContext.Provider>
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