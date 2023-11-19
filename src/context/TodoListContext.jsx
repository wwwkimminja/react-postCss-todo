import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todo-reducer";

export const TodoListContext = createContext();

export function TodoListProvider({children }) {

  const fetched = JSON.parse(localStorage.getItem("todoList"));

  const [todoList,dispatch]=useReducer(todoReducer,fetched??[])

  const handleDelete = (id)=>{
    dispatch({type:'deleted',id})
  }
  const handleState = (item)=>{
    const state = item.state === "doing"?"done":"doing"
    dispatch({type:"updated",id:item.id, state})
  }
  const handleAdd = (content)=>{
    dispatch({type:"added",content})
  }

  useEffect(()=>{
      localStorage.setItem("todoList",JSON.stringify(todoList))
  },[todoList])

  return (
    <TodoListContext.Provider value={{todoList,handleAdd,handleState,handleDelete}}>
      {children}
    </TodoListContext.Provider>
  )

}

