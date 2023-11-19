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
      <ul className={styles.menu}>
       { filters.map((filter)=>{
        const fontWeight = filter === filterType?"bold":"normal"
        return (
          <li  key={filter} >
          <button onClick={()=>handleFilter(filter)} style={{color:darkMode&&"white", fontWeight}} >
           {filter.toUpperCase()}
          </button>
           </li>
        )
       })}
      </ul>
    </div>
  )
}

export default Nav