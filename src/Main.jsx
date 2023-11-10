import React from 'react'
import styles from './Main.module.css'
import {MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox,MdDeleteForever} from 'react-icons/md'


function Main() {
  return (
    <ul className={styles.container} >
      <li className={styles.item}>
        <MdOutlineCheckBoxOutlineBlank/>
        <MdOutlineCheckBox/>
        <div className={styles.text}>text</div>
        <MdDeleteForever size={20}/>
      </li>
    </ul>
  )
}

export default Main