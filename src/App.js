import styles from './App.module.css'
import Form from './Form';
import Main from './Main';
import Nav from './Nav';
function App() {
  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <Form />
    </div>

  );
}

export default App;
