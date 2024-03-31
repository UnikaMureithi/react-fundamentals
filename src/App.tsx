import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <h1>Hello! This is my first button</h1>
      <Button/>
      <AboutPage/>
    </div>
  );
}

export default App;
