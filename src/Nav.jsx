import React, { useContext } from 'react'
import{ MdLightMode,MdNightlight} from 'react-icons/md'
import styles from './Nav.module.css'
import { DarkModeContext } from './context/DarkModeContext'

function Nav({filters,handleFilter,filterType}) {
  const {darkMode,toggleDarkMode}=useContext(DarkModeContext)
  

  return (
    <div className={styles.container}>
      <button onClick={()=>toggleDarkMode()} >
        {darkMode? <MdNightlight color="white"/>: <MdLightMode />}
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
    </div>
  )
}

export default Nav