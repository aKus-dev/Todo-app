import { useState } from 'react';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';
import ThemeContext from './contexts/ThemeContext';
import './index.css';

function App() {

  const actualTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(actualTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`App ${theme}`}>
          <Header />
          <TodoContainer />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
