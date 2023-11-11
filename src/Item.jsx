import React from 'react'
import styles from './Item.module.css'
import {MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox,MdDeleteForever} from 'react-icons/md'


function Item({item,handleDelete,handleCheck}) {
  const isChecked = item.state ==="done"

  return (
    <li className={styles.container}>
      <div  onClick={()=>handleCheck(item)}>
      {isChecked?
      <MdOutlineCheckBox/>:
      <MdOutlineCheckBoxOutlineBlank />
      }
        
       <span className={styles.content}>{item.content}</span>
      </div>
      <MdDeleteForever size={20} onClick={()=> handleDelete(item.id)} className={styles.delete}/>
  </li>
  )
}
export default Item