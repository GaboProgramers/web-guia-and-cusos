import { useState } from 'react';
import './App.css';
import HeaderNav from './components/headers/HeaderNav';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`App ${!darkMode ? '' : 'dark'}`}>
      <div>
        <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </main>
  );
}

export default App;
