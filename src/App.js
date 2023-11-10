import { useState } from 'react';
import styles from './App.module.css'
import Form from './Form';
import Main from './Main';
import Nav from './Nav';
function App() {
  const [filterType, setFilterType] = useState("doing")

  return (
    <div className={styles.container}>
      <Nav />
      <Main filterType={filterType} />
      <Form />
    </div>

  );
}

export default App;
