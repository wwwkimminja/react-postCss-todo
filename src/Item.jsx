import React from 'react'
import styles from './Item.module.css'
import {MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox,MdDeleteForever} from 'react-icons/md'


function Item({item,handleDelete,handleCheck}) {
  const isChecked = item.state ==="done"

  return (
    <li className={styles.item}>
    <div className={styles.text} onClick={()=>handleCheck(item)}>
    {isChecked?
    <MdOutlineCheckBox/>:
    <MdOutlineCheckBoxOutlineBlank />
    }
      
      {item.content}</div>
      <MdDeleteForever size={20} onClick={()=> handleDelete(item.id)}/>
  </li>
  )
}
export default Item