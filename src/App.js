import React from 'react';
import './index.css';
import Home from './routes/Home';
import Receita from './routes/receita';
import NewReceita from './routes/newReceita';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receita/:id" element={<Receita />} />
        <Route path="/newReceita" element={<NewReceita />} />
      </Routes>
    </Router>
  );
}

export default App;





