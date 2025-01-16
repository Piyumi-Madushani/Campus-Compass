import React, { useRef } from 'react';
import '../css/FeaturedCourses.css';
import UoCLogo from '../assets/images/UniversityLogos/UniversityofColomboLogo.png';
import UoPLogo from '../assets/images/UniversityLogos/UniversityOfPeradeniyaLogo.png';
import UoMLogo from '../assets/images/UniversityLogos/UniversityOfMoratuwaLogo.png';
import UoKLogo from '../assets/images/UniversityLogos/UniversityOfKelaniyaLogo.png';
import UoRLogo from '../assets/images/UniversityLogos/UniversityOfRuhunaLogo.png';
import UoJLogo from '../assets/images/UniversityLogos/UniversityOfJaffnaLogo.png';
import UoSJLogo from '../assets/images/UniversityLogos/UniversityOfSriJayawardanapuraLogo.png';
import UoSLogo from '../assets/images/UniversityLogos/UniversityOfSabaragamuwaLogo.png';
import UoWLogo from '../assets/images/UniversityLogos/WayambaUniversityLogo.png';
import UoELogo from '../assets/images/UniversityLogos/EasternUniversityLogo.png';
//import UWULogo from '../assets/images/UniversityLogos/UvaWellassaUniversityLogo.jpg';

function FeaturedCourses() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const scrollAmount = 300;
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const universities = [
    {
      name: 'University of Colombo',
      course: 'Computer Science',
      logo: UoCLogo,
      link: 'https://www.cmb.ac.lk/',
    },
    {
      name: 'University of Sri Jayewardenepura',
      course: 'Finance & Accounting',
      logo: UoSJLogo,
      link: 'https://www.sjp.ac.lk/',
    },
    {
      name: 'University of Peradeniya',
      course: 'Medicine',
      logo: UoPLogo,
      link: 'https://www.pdn.ac.lk/',
    },
    {
      name: 'University of Moratuwa',
      course: 'Engineering',
      logo: UoMLogo,
      link: 'https://uom.lk/',
    },
    {
      name: 'University of Kelaniya',
      course: 'Management',
      logo: UoKLogo,
      link: 'https://www.kln.ac.lk/',
    },
    {
      name: 'University of Ruhuna',
      course: 'Agriculture',

      logo: UoRLogo,
      link: 'https://www.ruh.ac.lk/',
    },
    {
      name: 'University of Jaffna',
      course: 'Health Sciences',

      logo: UoJLogo,
      link: 'https://www.jfn.ac.lk/',
    },
    {
      name: 'University of Sabaragamuwa',
      course: 'Tourism Management',
      logo: UoSLogo,
      link: 'https://www.sabcampus-co.ac.lk/',
    },
    /*{
      name: 'Uva Wellassa University of Sri Lanka',
      course: 'Entrepreneurship and Management',
      logo: UWULogo,
      link: 'https://www.uwu.ac.lk/',
    },*/
    {
      name: 'University of Wayamba',
      course: 'Applied Sciences',
      logo: UoWLogo,

      link: 'https://www.wyb.ac.lk/',
    },
    {
      name: 'Eastern University, Sri Lanka',
      course: 'Social Sciences',

      logo: UoELogo,

      link: 'https://www.esn.ac.lk/',
    },
  ];

  return (
    <section className="featured-courses" id="courses">
      <h2>Featured Courses</h2>
      <div className="slider-container">
        <button className="scroll-btn left-btn" onClick={() => scrollSlider('left')}>
          &#8249;
        </button>
        <div className="course-slider" ref={sliderRef}>
          {universities.map((uni, index) => (
            <div
              key={index}
              className="course-card"
              onClick={() => window.open(uni.link, '_blank')}
            >
              <img src={uni.logo} alt={`${uni.name} logo`} className="university-logo" />
              <h3>{uni.name}</h3>
              <p>{uni.course}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right-btn" onClick={() => scrollSlider('right')}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default FeaturedCourses;
