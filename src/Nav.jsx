import React from 'react'
import{MdLightMode,MdNightlight} from 'react-icons/md'
import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.container}>
      <div >
        <MdLightMode/>
        <MdNightlight/>
      </div>
      <ul className={styles.menu}>
        <li>All</li>
        <li>Doing</li>
        <li>Done</li>
      </ul>
    </div>
  )
}

export default Nav