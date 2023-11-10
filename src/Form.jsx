import React from 'react'
import styles from './Form.module.css'

function Form() {
  return (
    <form onSubmit={()=>{console.log("save")}} className={styles.container}>
      <input type="text" className={styles.input}/>
      <button type='submit'>Save</button>
    </form>
  )
}

export default Form