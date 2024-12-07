// import React, { useEffect, useState } from 'react';
// import './EndSection.css';

// const EndSection = () => {
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
    
//     setFadeIn(true);
//   }, []);

//   return (
//     <div className="project-collaboration-container">
//       <div className="background-image" style={{ backgroundImage: `url('endsec.jpeg')` }}>
//       </div>
//       <div className={`content-overlay ${fadeIn ? 'fade-in' : ''}`}>
//         <h1 className="title">Let's Work Together On Your Next <span className="gold-text">Project</span></h1>
//         <p className="subtitle">I'm always open to exciting new projects. Let's create something amazing!</p>
//         <a href="#contact" className="cta-button">Get In Touch</a>
//       </div>
//     </div>
//   );
// };

// export default EndSection;
import React, { useEffect, useState } from 'react';
import './EndSection.css';

const EndSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Adding a fade-in effect after component is mounted
    setFadeIn(true);
  }, []);

  return (
    <div className="project-collaboration-container">
      <div className="background-image" style={{ backgroundImage: `url('endsec.jpeg')` }}>
      </div>
      <div className={`content-overlay ${fadeIn ? 'fade-in' : ''}`}>
        <h1 className="title">Let's Work Together On Your Next <span className="gold-text">Project</span></h1>
        <p className="subtitle">I'm always open to exciting new projects. Let's create something amazing!</p>
        <a href="#contact" className="cta-button">Get In Touch</a>
        {/* Add download button */}
        <a href="/cv.pdf" download className="download-button">View My Cv</a>
      </div>
    </div>
  );
};

export default EndSection;
