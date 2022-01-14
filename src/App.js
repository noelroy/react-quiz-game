import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';
import GamePage from './pages/GamePage';
import GlobalStyle from './App.style';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
       <Routes>
         <Route path="/" element={<StartPage />} />
         <Route path="result" element={<ResultPage />} />
         <Route path="game" element={<GamePage />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
