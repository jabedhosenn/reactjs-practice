// import React, {Component} from "react";
// import './About.css';

// class About extends Component {
//     render() {
//         return(
//             <div className="About">
//                 <h2>About Us</h2>
//                 <p>This is the About page of our React application.</p>
//             </div>
//         )
//     }
// }

// export default About;
// // class component

import React, { Component } from "react";
import "./About.css";

class About extends Component {
  // state = {
  //     name: "Jabed Hosen JH",
  //     age: 25,
  //     profession: "Software Developer"
  // }; // state method

  constructor(props) {
    super(props);
    this.state = {
      name: "Jabed Hosen JH",
      age: 25,
    //   profession: {
    //     title: "Software Developer",
    //     experience: "5 years",
    //   }
    profession: "Software Developer",
    };
  } // constructor method

  ChangeValue(){
    this.setState({
      profession: {
        title: "Senior Software Developer",
        experience: "7 years",
      }
    });
  }
  
  render() {
    return (
      <div className="About">
        <h2>About Us</h2>
        <p>This is the About page of our React application. About P2</p>
        <h3>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Profession: {this.state.profession.title}</h3>
        <h3>Experience: {this.state.profession.experience}</h3>
        <button className="btn" onClick={() => this.ChangeValue()}>Change Profession</button>
      </div>
    );
  }
}

export default About;
// class component
