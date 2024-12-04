import React, { useEffect } from "react";
import './ProjectSection.css';  // Styling for your project section

const projects = [
  {
    title: 'Zenith Events: Event Management System',
    description: 'Event management system',
    githubLink: 'https://github.com/Adharsh0/event_webApp.git',
    moreInfoLink: '/projects/project1',
    image: '1.PNG', // Add image path here
  },
  {
    title: 'Online Doctor Appointment System using Java Swing',
    description: 'Doctor booking system.',
    githubLink: 'https://github.com/Adharsh0/online-doctor-appointment-system-using-java.git',
    moreInfoLink: '/projects/project2',
    image: 'doc.jpg', // Add image path here
  },
  {
    title: 'Online Retail Recommendation System using Python',
    description: 'Recommendation system.',
    githubLink: 'https://github.com/Adharsh0/online-retail-recommendation-system-using-python.git',
    moreInfoLink: '/projects/project3',
    image: 'on.jpg', // Add image path here
  },
  {
    title: 'Vending Machine as an Application of NFA',
    description: 'Automation system',
    githubLink: 'https://github.com/yourusername/project4',
    moreInfoLink: '/projects/project4',
    image: 'vend.png', // Add image path here
  },
  {
    title: 'OGKissan: Farmer Contract System',
    description: 'MERN stack system.',
    githubLink: 'https://github.com/yourusername/project5',
    moreInfoLink: '/projects/project5',
    image: 'far.jpg', // Add image path here
  },
];

const ProjectSection = () => {
  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");  // Add class to trigger animation
            observer.unobserve(entry.target);  // Stop observing the target
          }
        });
      },
      { threshold: 0.5 }  // Trigger when 50% of the card is in view
    );

    projectItems.forEach(item => {
      observer.observe(item);  // Observe each project item
    });

    return () => {
      projectItems.forEach(item => {
        observer.unobserve(item);  // Clean up observers
      });
    };
  }, []);

  return (
    <div id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
            <button className="know-more-btn" onClick={() => window.location.href = project.moreInfoLink}>
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
