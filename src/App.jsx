import { useState } from 'react';
import './App.css';
import HeaderNav from './components/headers/HeaderNav';
import SectionContainerTitle from './components/main/about_web/SectionContainerTitle';
import SectionListLenguages from './components/main/about_web/SectionListLenguages';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${!darkMode ? '' : 'dark'}`}>
      <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main__container">
                <div className="container__section">
                  <SectionContainerTitle />
                </div>
                <div>
                  <SectionListLenguages />
                </div>
              </div>
            }
          />
          <Route path="/00-started" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
