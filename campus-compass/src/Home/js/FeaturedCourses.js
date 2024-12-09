import React, { useRef } from 'react';
import '../css/FeaturedCourses.css';

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
      logo: '/assets/images/uoc-logo.png',
      link: 'https://www.cmb.ac.lk/',
    },
    {
      name: 'University of Peradeniya',
      course: 'Medicine',
      logo: '/assets/images/uop-logo.png',
      link: 'https://www.pdn.ac.lk/',
    },
    {
      name: 'University of Moratuwa',
      course: 'Engineering',
      logo: '/assets/images/uom-logo.png',
      link: 'https://uom.lk/',
    },
    {
      name: 'University of Kelaniya',
      course: 'Management',
      logo: '/assets/images/uok-logo.png',
      link: 'https://www.kln.ac.lk/',
    },
    {
      name: 'University of Ruhuna',
      course: 'Agriculture',
      logo: '/assets/images/uor-logo.png',
      link: 'https://www.ruh.ac.lk/',
    },
    {
      name: 'University of Jaffna',
      course: 'Health Sciences',
      logo: '/assets/images/uoj-logo.png',
      link: 'https://www.jfn.ac.lk/',
    },
    {
      name: 'University of Sri Jayewardenepura',
      course: 'Finance & Accounting',
      logo: '/assets/images/usjp-logo.png',
      link: 'https://www.sjp.ac.lk/',
    },
    {
      name: 'University of Sabaragamuwa',
      course: 'Tourism Management',
      logo: '/assets/images/usu-logo.png',
      link: 'https://www.sab.ac.lk/',
    },
    {
      name: 'University of Wayamba',
      course: 'Applied Sciences',
      logo: '/assets/images/uow-logo.png',
      link: 'https://www.wyb.ac.lk/',
    },
    {
      name: 'Eastern University, Sri Lanka',
      course: 'Social Sciences',
      logo: '/assets/images/eusl-logo.png',
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
