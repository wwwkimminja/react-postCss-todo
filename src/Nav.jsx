import React from 'react'
import{ HiSun,HiMoon} from 'react-icons/hi'
import styles from './Nav.module.css'
import { useDarkMode } from './context/DarkModeContext'

function Nav({filters,handleFilter,filterType}) {
  const {darkMode,toggleDarkMode}=useDarkMode()

  return (
    <header className={styles.container}>
      <button className={styles.toggle} onClick={toggleDarkMode} >
        {darkMode? <HiMoon />: <HiSun />}
      </button>
      <ul className={styles.filters}>
       { filters.map((filter)=>{
        return (
          <li  key={filter} >
          <button className={`${styles.filter} ${filter === filterType && styles.selected}`} onClick={()=>handleFilter(filter)}  >
           {filter}
          </button>
           </li>
        )
       })}
      </ul>
    </header>
  )
}

export default Nav