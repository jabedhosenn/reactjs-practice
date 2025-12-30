import React from "react";
import './Home.css';

const Name = "Jabed Hosen JH";
const Name1 = Name.toUpperCase();

function Home(){
    return(
        <div className="Home">
            <h2>Welcome to the Home Page</h2>
            <h3>{Name}</h3>
            <h3>{Name1}</h3>
            <p>This is the Home page of our React application.</p>
            
        </div>
    );
}

export default Home;
// functional component