import React from "react";

// Main App Component
function Facilities() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>

      <Section
        title="What facilities do universities provide for students?"
        content={
          <>
            <h3>State Universities</h3>
            <ul>
              <li>Library facilities with access to books, journals, and online resources.</li>
              <li>Sports complexes and recreational areas for physical activities.</li>
              <li>Hostels for outstation students (subject to availability).</li>
              <li>Computer labs and Wi-Fi access across the campus.</li>
              <li>Cafeterias and student lounges for socializing and relaxation.</li>
              <li>Health and counseling services for mental and physical well-being.</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>Modern classrooms equipped with multimedia and projectors.</li>
              <li>On-campus hostels and accommodation facilities for students.</li>
              <li>State-of-the-art computer labs and Wi-Fi access.</li>
              <li>Recreational areas, cafes, and gyms for students.</li>
              <li>Career guidance and placement support through university networks.</li>
            </ul>
          </>
        }
      />

      <Section
        title="Are there student clubs or extracurricular activities available?"
        content={
          <>
            <p>
              Yes, both state and private universities in Sri Lanka offer a wide range of student clubs and extracurricular activities.
              These activities include cultural, sports, social, academic, and volunteering clubs. Examples include:
            </p>
            <h3>State Universities</h3>
            <ul>
              <li>Drama and performing arts clubs.</li>
              <li>Sports teams and clubs for various games like cricket, football, and athletics.</li>
              <li>Debating clubs and public speaking forums.</li>
              <li>Environmental conservation and community outreach programs.</li>
              <li>Art and photography clubs.</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>Cultural events and social gatherings.</li>
              <li>Technology and innovation clubs (e.g., robotics and coding clubs).</li>
              <li>Business and entrepreneurship clubs.</li>
              <li>Volunteering and charity projects.</li>
            </ul>
          </>
        }
      />

      <Section
        title="Do universities provide career guidance or job placement?"
        content={
          <>
            <h3>State Universities</h3>
            <p>
              Most state universities in Sri Lanka provide career guidance services through career counseling centers. These centers offer
              students advice on career planning, job search strategies, and interview preparation. They may also organize job fairs and
              workshops to connect students with employers.
            </p>
            <h3>Private Universities</h3>
            <p>
              Private universities like SLIIT, NSBM, and CINEC have dedicated career guidance and placement cells. These cells help students
              with internships, job placements, and skill development. They often work closely with industry partners and organize job
              fairs to facilitate employment opportunities.
            </p>
            <p>
              Some private universities also offer specialized training programs, internships, and mentoring to enhance students' career
              prospects.
            </p>
          </>
        }
      />
    </div>
  );
}

// Reusable Section Component
function Section({ title, content }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>{content}</div>
    </div>
  );
}

// Basic Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "900px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    lineHeight: 1.6,
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  section: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    borderBottom: "2px solid #3498db",
    paddingBottom: "8px",
    marginBottom: "10px",
    color: "#3498db",
  },
  content: {
    fontSize: "16px",
  },
};

export default Facilities;
