import React from 'react'
const user = {
    name:"Unika Mureithi",
    imageUrl: "https://imgur.com/u5OUfBF.jpg",
    imageSize: 120,
};

function AboutPage(){
    return(
        <>

        <h1>About Me</h1>
        <p>Hello, my name is {user.name}, and I am learning React.</p>
        <img
        src = {user.imageUrl}
        style = {{ width:user.imageSize,
        height:user.imageSize }} />

        </>
    );
}

export default AboutPage;