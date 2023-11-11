import { useContext, useState } from 'react';
import styles from './App.module.css'
import Form from './Form';
import Main from './Main';
import Nav from './Nav';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
function App() {
  const [filterType, setFilterType] = useState("doing")
  const { darkMode } = useContext(DarkModeContext)

  const onChangeFilter = (filterType) => {
    setFilterType(filterType)
  }

  const theme = darkMode ? { background: 'black', color: 'white' } : {}
  return (
    <div className={styles.container} style={theme}>
      <Nav handleFilter={onChangeFilter} />
      <Main filterType={filterType} />
      <Form />
    </div>
  );
}

export default App;
