import { useState } from 'react';
import Main from './Main';
import Nav from './Nav';
import { DarkModeProvider } from './context/DarkModeContext';
import { TodoListProvider } from './context/TodoListContext';

const filters = ['all', 'done', 'doing']
function App() {
  const [filterType, setFilterType] = useState(filters[0])

  return (
    <DarkModeProvider>
      <Nav filters={filters} handleFilter={setFilterType} filterType={filterType} />
      <TodoListProvider>
        <Main filterType={filterType} />
      </TodoListProvider>
    </DarkModeProvider>
  );
}

export default App;
