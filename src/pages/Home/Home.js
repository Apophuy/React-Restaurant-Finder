import React, { Component } from "react";
import "./index.css";
import Navbar from "../../components/NavbarHome/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="main">
          <video src="../../assets/video-bg.mp4" autoPlay loop muted></video>
        </div>
        <div className="title">
          <label htmlFor="search"> Don't know where to eat healthy? </label>
          <input type="text" id="search" />
        </div>
      </div>
    );
  }
}

export default Home;
