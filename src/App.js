import { useContext, useState } from 'react';
import styles from './App.module.css'
import Form from './Form';
import Main from './Main';
import Nav from './Nav';
import { DarkModeContext } from './context/DarkModeContext';
import { TodoListProvider } from './context/TodoListContext';

const filters = ['all', 'done', 'doing']
function App() {
  const [filterType, setFilterType] = useState(filters[0])
  const { darkMode } = useContext(DarkModeContext)


  const theme = darkMode ? { background: 'black', color: 'white' } : {}
  return (
    <div className={styles.container} style={theme}>
      <Nav filters={filters} handleFilter={setFilterType} filterType={filterType} />
      <TodoListProvider>
        <Main filterType={filterType} />
        <Form />
      </TodoListProvider>
    </div>
  );
}

export default App;
