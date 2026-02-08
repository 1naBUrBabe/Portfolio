import React from "react";
import "./Header.css";
import pic from "../assets/pic.jpg";

const Header = () => {
  return (
    <section id="Home">
      <div className="home-container">
        <div className="text-container">
          <h1>Hi, I'm</h1>
          <h1>Thanakrit Cheewarungrod</h1>
          <br></br>
          <p>
            I'm third year student at
            <span className="important-text"> Prince at Songkhla University</span>
          </p>
          <p>in Science Faculty and Computer Science Major</p>
          <br></br>
          <p>
            I'm seeking about <span className="important-text">Web Development </span>
            And <span className="important-text">Data Analytics</span> Internship
          </p>
          <br></br>
          <div className="btn">
            <a href="#">VIEW PROJECT</a>
          </div>
        </div>
        <div className="img-container">
          <img src={pic} />
        </div>
      </div>
    </section>
  );
};

export default Header;
