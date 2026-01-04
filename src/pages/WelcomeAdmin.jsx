import React, { Component } from "react";
import "./WelcomeAdmin.css";
import Fitar from "./Fitar";

class WelcomeAdmin extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            YourAge:true,
        }
    }
  render() {
    if(this.state.YourAge)
    {
        let message = "Welcome to dashboard"
    }else{
        let message = <Fitar />
    }
    return <div className="WelcomeAdmin">WelcomeAdmin</div>;
  }
}

export default WelcomeAdmin;
