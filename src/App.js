import { useContext, useState } from 'react';
import styles from './App.module.css'
import Form from './Form';
import Main from './Main';
import Nav from './Nav';
import { DarkModeContext } from './context/DarkModeContext';
import { TodoListProvider } from './context/TodoListContext';
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
      <TodoListProvider>
        <Main filterType={filterType} />
        <Form />
      </TodoListProvider>
    </div>
  );
}

export default App;
