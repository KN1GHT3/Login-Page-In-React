import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./components/Login.jsx"
import Dashboard from "./components/Dashboard.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};


export default App  
