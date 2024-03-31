import React from 'react';
import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';

let content: any;
let isLoggedIn;
if (isLoggedIn){
  content = <AboutPage />;
} else{
  content = <Button />;
}


function App() {
  return (
    <div>
      <h1 className='h1'>Hello! This is my first button</h1>
      <Button/>
      <AboutPage/>

      <br />
      {content}
      
    </div>
  );
}

export default App;
