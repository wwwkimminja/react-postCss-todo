import React from 'react'
import styles from './Item.module.css'
import {MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox,MdDeleteForever} from 'react-icons/md'


function Item({item}) {
  const {type,content}=item
  const isChecked = type ==="done"


  return (
    <li className={styles.item}>
    <div className={styles.text}>
    {isChecked?
    <MdOutlineCheckBoxOutlineBlank />: 
    <MdOutlineCheckBox/>
    }
      
      {content}</div>
    <MdDeleteForever size={20}/>
  </li>
  )
}

export default Item