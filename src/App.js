import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route }from 'react-router-dom';
import MainPage from './pages/MainPage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
