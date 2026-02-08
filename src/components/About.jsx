import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="About">

      <div className="about-header">
        <div className="line"></div>
        <div className="capsule">
          <p>ABOUT</p>
        </div>
        <div className="line"></div>
      </div>
      
      <div className="about-content">

        <div className="education">

          <h2>Education</h2>
          <div className="line"></div>

          <br></br>
          
          <span className="bold">Prince of Songkhla University , Hatyai Campus</span>
          <p>Major : Computer Science</p>
          <p>GPAX : 3.56 | 2023 - Present</p>
          
          <br></br>
          
          <span className="bold">Patongwittayamulnithi School</span>
          <p>Program : Science And Mathematics</p>
          <p>GPAX : 3.52 | 2020 - 2023</p>

        </div>

        <div className="skill">

          <h2>Skills</h2>
          <div className="line"></div>

          <div className="grid-group">
            <div className="web">
              <div className="title">
                <h3>Web Development</h3>
              </div>
              <div className="line"></div>
              <div className="content">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="db">
              <div className="title">
              <h3>Database</h3>
              </div>
              <div className="line"></div>
              <div className="content">
              <ul>
                <li>SQL</li>
                <li>Supabase</li>
                <li>Oracle SQL</li>
              </ul>
            </div>
            </div>

            <div className="tool">
              <div className="title">
              <h3>Tools</h3>
              </div>
              <div className="line"></div>
              <div className="content">
              <ul>
                <li>Git&GitHub</li>
                <li>Figma</li>
                <li>Excel</li>
                <li>PowerBI</li>
                <li>Google Colab</li>
                <li>Canva</li>
                <li>RoboFlow</li>
                <li>SoureTree</li>
              </ul>
              </div>
            </div>
          </div>
          

        </div>

      </div>

    </section>
  );
};

export default About;
