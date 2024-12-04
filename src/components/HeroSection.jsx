import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = ({ onProfileClick }) => {
  const roles = ["Full-Stack Developer", "Programmer", "Software Engineer", ""];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length); 
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roles, roleIndex]);

  useEffect(() => {
    setCurrentRole(roles[roleIndex].substring(0, charIndex));
  }, [charIndex, roleIndex, roles]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="glowing-name">Adharsh Udayakumar</h1>
        <h2>
          <span className="typewriter">{currentRole}</span>
        </h2>

        <div className="hero-buttons">
          <button className="hero-btn yellow-btn">Connect with Me</button>
          <button className="hero-btn yellow-btn" onClick={onProfileClick}>My Profile</button>
          <button className="hero-btn outline-btn">
            <a href="#skills">View My Skills</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
