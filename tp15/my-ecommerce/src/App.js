import React from 'react';
import { ThemeProvider } from './contexts/themecontext';
import MainPage from './pages/Mainpage';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
