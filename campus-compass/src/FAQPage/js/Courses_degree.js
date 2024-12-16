import React from "react";

// Main App Component
function Courses_degree() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>
      <Section
        title="What are the most popular degree programs in Sri Lanka?"
        content={
          <>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>Bachelor of Engineering (Electrical, Civil, Mechanical, etc.)</li>
              <li>Bachelor of Business Administration (BBA)</li>
              <li>Bachelor of Arts in Humanities</li>
              <li>Bachelor of Science in Environmental Science</li>
            </ul>
          </>
        }
      />
      <Section
        title="How can I find the right course for me?"
        content={
          <>
            <p>
              To find the right course, consider your interests, skills, and career
              goals. Explore various university programs by visiting their websites or
              consulting with academic counselors. You can also refer to online platforms
              that compare different courses and universities in Sri Lanka.
            </p>
          </>
        }
      />
      <Section
        title="What universities offer ICT or Engineering Technology programs?"
        content={
          <>
            <ul>
              <li>University of Moratuwa (ICT, Engineering Technology)</li>
              <li>University of Colombo (ICT, Engineering Technology)</li>
              <li>Uva Wellassa University (ICT,Engineering Technology)</li>
              <li>SLIIT (Sri Lanka Institute of Information Technology - ICT, Engineering)</li>
              <li>University of Sri Jayewardenepura (ICT)</li>
            </ul>
          </>
        }
      />
      <Section
        title="Are there part-time or online degree programs available?"
        content={
          <>
            <p>
              Yes, several universities in Sri Lanka offer part-time and online degree
              programs, especially in fields like Business Administration, Information
              Technology, and Engineering. Notable universities offering such programs
              include:
            </p>
            <ul>
              <li>University of Colombo - Online MBA</li>
              <li>SLIIT - Part-time BSc in Information Technology</li>
              <li>Open University of Sri Lanka - Online Degree Programs</li>
              <li>University of Moratuwa - Part-time MSc in Engineering</li>
            </ul>
          </>
        }
      />
      <Section
        title="How long does it take to complete an undergraduate degree in Sri Lanka?"
        content={
          <>
            <p>
              The typical duration for completing an undergraduate degree in Sri Lanka is 3
              to 4 years. The length of time may vary depending on the specific program,
              university, and course structure.
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

export default Courses_degree;
