import React from 'react';
import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';
import List from './components/List';

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
      <br />
      
      <List/>
    </div>
  );
}

export default App;
