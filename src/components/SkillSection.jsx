import React from "react";
import "./SkillSection.css";

const SkillSection = () => {
  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-list">
        {/* C Programming */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://logodix.com/logo/640660.png" alt="C Programming" />
            </div>
            <div className="back">
              <h3>C</h3>
              <p>Proficient in C programming for algorithm development.</p>
            </div>
          </div>
        </div>
        {/* Java */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png" alt="Java Programming" />
            </div>
            <div className="back">
              <h3>Java</h3>
              <p>Experienced in building Java applications and OOP concepts.</p>
            </div>
          </div>
        </div>
        {/* Python */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://www.pngitem.com/pimgs/m/31-312064_programming-icon-png-python-logo-512-transparent-png.png" alt="Python Programming" />
            </div>
            <div className="back">
              <h3>Python</h3>
              <p>Expert in Python scripting and data science projects.</p>
            </div>
          </div>
        </div>
        {/* MERN Stack */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://pngimg.com/uploads/mysql/mysql_PNG29.png" alt="MERN Stack" />
            </div>
            <div className="back">
              <h3>MERN Stack</h3>
              <p>Skilled in building full-stack applications using MongoDB, Express, React, Node.js.</p>
            </div>
          </div>
        </div>
        {/* Oracle */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Emblem.jpg" alt="Oracle" />
            </div>
            <div className="back">
              <h3>Oracle</h3>
              <p>Experienced in working with Oracle databases for enterprise applications.</p>
            </div>
          </div>
        </div>
        {/* GenAI */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://genai.gd.edu.kg/assets/img/logo.svg" alt="GenAI" />
            </div>
            <div className="back">
              <h3>GenAI</h3>
              <p>Familiar with AI and machine learning concepts using GenAI frameworks.</p>
            </div>
          </div>
        </div>
        {/* Website Development */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://www.postingtree.com/wp-content/uploads/2022/07/Web-Development.jpg" alt="Website Development" />
            </div>
            <div className="back">
              <h3>Website Development</h3>
              <p>Skilled in building responsive and dynamic websites.</p>
            </div>
          </div>
        </div>
        {/* MongoDB */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://miro.medium.com/v2/resize:fit:256/1*XR69xeq43LgKB0T_LjZqwQ.png" alt="MongoDB" />
            </div>
            <div className="back">
              <h3>MongoDB</h3>
              <p>Proficient in NoSQL database design and management with MongoDB.</p>
            </div>
          </div>
        </div>
        {/* Express.js */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express.js" />
            </div>
            <div className="back">
              <h3>Express.js</h3>
              <p>Experienced in creating RESTful APIs with Express.js in Node.js.</p>
            </div>
          </div>
        </div>
        {/* React */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" alt="React" />
            </div>
            <div className="back">
              <h3>React</h3>
              <p>Skilled in building user interfaces using React.js and component-based architecture.</p>
            </div>
          </div>
        </div>
        {/* Node.js */}
        <div className="skill-item">
          <div className="icon-card">
            <div className="front">
              <img src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" alt="Node.js" />
            </div>
            <div className="back">
              <h3>Node.js</h3>
              <p>Experienced in server-side development with Node.js.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;