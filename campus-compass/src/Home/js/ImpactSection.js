import React from 'react';
import '../css/ImpactSection.css';
import discoverIcon from '../assets/icons/discover.JPG'; 
import degreeIcon from '../assets/icons/degree.JPG'; 
import resourcesIcon from '../assets/icons/resources.JPG'; 
import timeIcon from '../assets/icons/time.JPG'; 


function ImpactSection() {
  const features = [
    {
      title: 'Discover Universities',
      description:
        'Explore detailed profiles of universities, including location, rankings, facilities, and key highlights. Gain insights into academic offerings and campus life to make an informed choice.',
      icon: discoverIcon,
    },
    {
      title: 'Find the Perfect Degree',
      description:
        'Browse a comprehensive database of degree programs across multiple fields. Use search and filter options to narrow down programs by field of study, university, location, or duration.',
      icon: degreeIcon,
    },
    {
      title: 'Direct Access to Key Resources',
      description:
        'Access official university and program web pages instantly for application details, admission criteria, and deadlines.',
      icon: resourcesIcon,
    },
    {
      title: 'Save Time and Simplify Your Search',
      description:
        'An intuitive interface lets you find relevant information quickly and efficiently.',
      icon: timeIcon,
    },
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* Left side: Description */}
        <div className="impact-description">
          <h2>How Campus Compass Can Help You</h2>
          <p>
            At Campus Compass, we have been instrumental in helping students find their ideal courses and campuses.
          </p>
        </div>
        {/* Vertical Line */}
        <div className="vertical-line">
        </div>
        {/* Right side: Features */}
        <div className="impact-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
