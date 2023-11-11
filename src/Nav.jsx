import React, { useContext } from 'react'
import{MdLightMode,MdNightlight} from 'react-icons/md'
import styles from './Nav.module.css'
import { DarkModeContext } from './context/DarkModeContext'

function Nav({handleFilter}) {
  const {darkMode,toggleDarkMode}=useContext(DarkModeContext)



  return (
    <div className={styles.container}>
      <button onClick={()=>toggleDarkMode()} >
        {darkMode? <MdNightlight color="white"/>: <MdLightMode />}
      </button>
      <ul className={styles.menu}>
       <li onClick={()=>handleFilter("all")}>
       <button style={{color:darkMode&&"white"}}>
        All
       </button>
        </li>
        <li onClick={()=>handleFilter("doing")}>
       <button style={{color:darkMode&&"white"}}>
           Doing
       </button>
           </li>
        <li onClick={()=>handleFilter("done")}>
       <button style={{color:darkMode&&"white"}}>
          Done
       </button>
          </li>
      </ul>
    </div>
  )
}

export default Nav