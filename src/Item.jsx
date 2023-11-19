import React from 'react'
import styles from './Item.module.css'
import {FaTrashAlt} from 'react-icons/fa'


function Item({item,onDelete,onUpdate}) {
  const isChecked = item.state ==="done"

  const handleChange =(e)=>{
    const status = e.target.checked?'done':'doing'
    onUpdate({...item,status})

  }


  return (
    <li className={styles.todo}>
      <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleChange}className={styles.checkbox}/>
      <label htmlFor='checkbox' className={styles.text}>{item.content}</label>
      <span className={styles.icon}>
        <button  className={styles.button} onClick={()=> onDelete(item.id)}>
          <FaTrashAlt/>
        </button>
      </span>
  </li>
  )
}
export default Item 