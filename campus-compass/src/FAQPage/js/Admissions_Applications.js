import React from "react";

// Main App Component
function Admissions_Applications() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>
      
      <Section
        title="When does the university application process start?"
        content={
          <>
            <p>
              The university application process in Sri Lanka typically starts after
              the release of GCE A/L results in August. Most state universities open
              their applications around September or October. Private universities may
              have different timelines, so it's important to check each university's
              website for specific dates.
            </p>
          </>
        }
      />
      
      <Section
        title="How can I apply for a university program?"
        content={
          <>
            <h3>1. Applying to State Universities</h3>
            <ul>
              <li>Sit for the GCE A/L Examination with required subjects.</li>
              <li>Check your Z-Score to meet cut-off marks for desired programs.</li>
              <li>Apply through the UGC (University Grants Commission) website: <a href="https://www.ugc.ac.lk" style={{ color: '#4ac6ff' }}>UGC Official Website</a>.</li>
              <li>Rank your preferred courses and wait for the selection process.</li>
            </ul>
            <h3>2. Applying to Private Universities</h3>
            <ul>
              <li>Research programs and universities offering courses in your field of interest.</li>
              <li>Check entry requirements (e.g., GCE A/L, IELTS/TOEFL, etc.).</li>
              <li>Submit applications online with the required documents.</li>
              <li>Some programs may require an entrance exam or interview.</li>
            </ul>
          </>
        }
      />
      
      <Section
        title="Do universities in Sri Lanka accept international students?"
        content={
          <>
            <p>
              Yes, many universities in Sri Lanka accept international students. State
              universities such as the University of Colombo, University of Moratuwa, and
              University of Peradeniya have international student programs. Private
              universities, like SLIIT and NSBM Green University, also accept international
              students. It's important to check the eligibility criteria, as each university
              may have different requirements for international students.
            </p>
          </>
        }
      />
      
      <Section
        title="What documents do I need to submit with my application?"
        content={
          <>
            <h3>For State Universities</h3>
            <ul>
              <li>Certified copies of GCE A/L results or equivalent qualifications.</li>
              <li>Copy of your birth certificate.</li>
              <li>Identity card (National ID or Passport).</li>
              <li>Other documents requested by the University (e.g., certificates of extracurricular activities).</li>
            </ul>
            <h3>For Private Universities</h3>
            <ul>
              <li>Completed application form (available on the university website).</li>
              <li>Certified copies of GCE A/L or equivalent qualifications.</li>
              <li>English proficiency proof (e.g., IELTS/TOEFL, if required).</li>
              <li>Passport-sized photographs.</li>
              <li>Additional documents such as personal statement or recommendation letters (depending on the program).</li>
            </ul>
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

export default Admissions_Applications;
