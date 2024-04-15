import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioApp from './PortfolioApp';
import GameScreen from './GameScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path='/game' element={<GameScreen />} />
        {/* You can define more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
