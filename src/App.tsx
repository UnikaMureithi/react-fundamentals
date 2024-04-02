import React from 'react';
import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';
import List from './components/List';
import Heading from './components/Heading';
import Section from './components/Section';
import { useState } from 'react';


function ProfilePage(){
  return(
    <Section isFancy={''}>
        <Heading>My Profile</Heading>
        <Post
        title="Hello traveller!"
        body="Read about my adventures." 
        />
        <AllPosts />
      </Section>
  )
}

function AllPosts(){
 return (
   <Section isFancy={''}>
     <Heading>Posts</Heading>
     <RecentPosts />
   </Section>
 );
}

function RecentPosts(){
 return (
   <Section isFancy={''}>
     <Heading>Recent Posts</Heading>
     <Post
     title="Flavors of Kenya"
     body="...that Pilau" 
     />
     <Post
       title="Their music is amazing"
       body="I loved it!"
      />
   </Section>
 );
}

function Post({ title, body} : {title: any, body: any}) {
 return (
   <Section isFancy={true}>
     <Heading>
       {title}
     </Heading>
     <p><i>{body}</i></p>
   </Section>
 )
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }

  return (
    <div>
      
      <Section isFancy={''}>
        <Heading>My Profile</Heading>
        <Post
        title="Hello traveller!"
        body="Read about my adventures." 
        />
        <AllPosts />
      </Section>

      <h1 className='h1'>Hello! This is my first button</h1>

      <AboutPage/>
    
      <List/>
      
      <Button count={count} onClick={handleClick}/>
      <Button count={count} onClick={handleClick}/>

    </div>
  );
}

export default App;
