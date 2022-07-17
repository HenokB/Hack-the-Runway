import "./Header.css"
import React from 'react'
import video from "./video.mp4"
function Header() {
    return (
      <header>
        <video src={video} loop autoPlay muted></video>
        <h1 className="title">Everyday is your Fashion show and the world is your runway!</h1>
        <h1 className="title2">So Fly with your style</h1>
        <div className="headerbg"></div>
      </header>
    );
  }
  export default Header;
  