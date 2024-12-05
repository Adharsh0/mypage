
// import React, { useState } from 'react';
// import './App.css';
// import HeroSection from './components/HeroSection';
// import SkillSection from './components/SkillSection';
// import ProjectSection from './components/ProjectSection';
// import Profile from './components/Profile';
// import ContactForm from './components/ContactForm';


// function App() {
//   const [showProfile, setShowProfile] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(true); // Show the profile when the button is clicked
//   };

//   const handleBackToHero = () => {
//     setShowProfile(false); // Go back to Hero section
//   };

//   return (
//     <div className="App">
//       {!showProfile ? (
//         <>
//           <HeroSection onProfileClick={handleProfileClick} />
//           <SkillSection />
//           <ProjectSection />
//           <ContactForm />
//         </>
//       ) : (
//         <div>
//           <Profile />
//           {/* Back button to return to Hero Section */}
//           <button onClick={handleBackToHero} className="back-to-hero-btn">Back to Home</button>
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import Profile from './components/Profile';
import ContactForm from './components/ContactForm';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true); // Show the profile when the button is clicked
  };

  const handleBackToHero = () => {
    setShowProfile(false); // Go back to Hero section
  };

  return (
    <div className="App">
      {!showProfile ? (
        <>
          <HeroSection onProfileClick={handleProfileClick} />
          <SkillSection />
          <ProjectSection />
          <ContactForm id="contact" />
        </>
      ) : (
        <div>
          <Profile />
          {/* Back button to return to Hero Section */}
          <button onClick={handleBackToHero} className="back-to-hero-btn">Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;
