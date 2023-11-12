import React, { useContext } from 'react'
import{ MdLightMode,MdNightlight} from 'react-icons/md'
import styles from './Nav.module.css'
import { DarkModeContext } from './context/DarkModeContext'

function Nav({handleFilter,filterType}) {
  const {darkMode,toggleDarkMode}=useContext(DarkModeContext)
  
  
  const handleClick =(e)=>{
    handleFilter(e.target.innerHTML.toLowerCase())
  }

  return (
    <div className={styles.container}>
      <button onClick={()=>toggleDarkMode()} >
        {darkMode? <MdNightlight color="white"/>: <MdLightMode />}
      </button>
      <ul className={styles.menu}>
       { ["all","doing","done"].map((filter)=>{
        const fontWeight = filter === filterType?"bold":"normal"
        return (
          <li onClick={handleClick} key={filter} >
          <button style={{color:darkMode&&"white", fontWeight}} >
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