import React, { useMemo } from 'react'
import styles from './Main.module.css'
import Item from './Item'


function Main({filterType}) {
  const itemList = useMemo(()=>{
    if(filterType ==="all") {
      return fetched.filter(item=>!item.isDeleted)
    }else{
      return fetched.filter(item=>!item.isDeleted && item.type === filterType)
    }

  },[filterType])

  return (
    <ul className={styles.container} >
      {
        itemList.map((v)=>
          <Item item={v}/>
        )
      }
    </ul>
  )
}


const fetched = [
  {
    type:"doing",
    content:"cleaning",
    isDeleted:false
  },
  {
    type:"done",
    content:"cleaning",
    isDeleted:false
  },
  {
    type:"doing",
    content:"jogging",
    isDeleted:false
  },
  {
    type:"doing",
    content:"homework",
    isDeleted:false
  },

]
export default Main