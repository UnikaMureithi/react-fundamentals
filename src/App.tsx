import React from 'react';
import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';
import List from './components/List';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }

  return (
    <div>
      <h1 className='h1'>Hello! This is my first button</h1>

      <AboutPage/>
    
      <List/>
      
      <Button count={count} onClick={handleClick}/>
      <Button count={count} onClick={handleClick}/>

    </div>
  );
}

export default App;
