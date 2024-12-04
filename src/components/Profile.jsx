import React from "react";
import "./Profile.css"; // Import the corresponding CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <h1 className="profile-name">Adharsh Udayakumar</h1>
          <p className="bio">Full Stack Developer | Software Engineer | Tech Enthusiast</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Introduction</h2>
        <p>
          I am a third-year Computer Science Engineering student with a strong passion for coding, algorithms, and software development. With a keen interest in the transformative potential of technology, I am committed to leveraging my skills to drive innovative solutions and make meaningful contributions to the field. My journey in computer science is fueled by dedication to learning and a vision to excel in creating impactful technologies. <br />
          Current position: Core Technical Member, BlockHub Executive Committee, MBCET
        </p>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Technology (B.Tech) in Computer Science</h3>
          <p>Mar Baselios College of Engineering | 2022 - 2026</p>
          <p>Key Areas: Full-stack development, Algorithms, Data Structures, Programming</p>
        </div>
        <div className="education-item">
          <h3>High School</h3>
          <p>St Josephs | 2020 - 2022</p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-media">
        <h2>Find Me On</h2>
        <div className="social-links">
          <a
            href="https://www.instagram.com/__.adharsh.____/profilecard/?igsh=ZzRjcGMzOXFkZGFk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/adharsh-udayakumar-4b6a39255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Adharsh0"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: adarshudayakumar30@gmail.com</p>
        <p>Phone: 7907605167</p>
      </section>
    </div>
  );
};

export default Profile;
