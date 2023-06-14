import { useState } from 'react';
import './App.css';
import HeaderNav from './components/headers/HeaderNav';
import SectionContainerTitle from './components/main/about_web/SectionContainerTitle';
import SectionListLenguages from './components/main/about_web/SectionListLenguages';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${!darkMode ? '' : 'dark'}`}>
      <header>
        <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="main__container">
        <div className="container__section">
          <SectionContainerTitle />
        </div>
        <div>
          <SectionListLenguages />
        </div>
      </main>
    </div>
  );
}

export default App;
