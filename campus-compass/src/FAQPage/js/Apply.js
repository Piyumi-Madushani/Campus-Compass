import React from "react";

// Main App Component
function Apply() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>
      <Section
        title="How Can I Apply to a University in Sri Lanka?"
        content={
          <>
            <h3>1. Applying to State Universities</h3>
            <ul>
              <li>Sit for the GCE A/L Examination with required subjects.</li>
              <li>Check your Z-Score to meet cut-off marks for desired programs.</li>
              <li>
                Apply via the UGC: Visit <a href="https://www.ugc.ac.lk" style={{ color: '#4ac6ff' }}>UGC Official Website</a>.
              </li>
              <li>Rank your preferred courses and wait for selection.</li>
            </ul>
            <h3>2. Applying to Private Universities</h3>
            <ul>
              <li>Research programs and universities.</li>
              <li>Check entry requirements (GCE A/L, IELTS/TOEFL, etc.).</li>
              <li>Submit applications online with required documents.</li>
              <li>Attend entrance exams or interviews (if applicable).</li>
            </ul>
          </>
        }
      />
      <Section
        title="What are the Eligibility Criteria for Undergraduate Courses?"
        content={
          <>
            <h3>State Universities</h3>
            <ul>
              <li>Pass GCE A/L or equivalent qualification recognized by the UGC.</li>
              <li>Specific subject combinations are required (e.g., Science for Medicine).</li>
              <li>No strict age limit.</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>GCE A/L, Cambridge A/L, or equivalent qualifications.</li>
              <li>Foundation programs for those without direct entry qualifications.</li>
              <li>English proficiency: IELTS/TOEFL may be required.</li>
            </ul>
          </>
        }
      />
      <Section
        title="What are the Top-Ranked Universities in Sri Lanka?"
        content={
          <>
            <h3>State Universities</h3>
            <ul>
              <li>University of Colombo</li>
              <li>University of Peradeniya</li>
              <li>University of Moratuwa</li>
              <li>University of Sri Jayewardenepura</li>
              <li>University of Kelaniya</li>
              <li>Uva Wellassa University</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>SLIIT - Sri Lanka Institute of Information Technology</li>
              <li>NSBM Green University</li>
              <li>CINEC Campus</li>
              <li>ICBT Campus</li>
              <li>APIIT - Asia Pacific Institute of Information Technology</li>
            </ul>
          </>
        }
      />
      <Section
        title="Are There Scholarships Available for Students?"
        content={
          <>
            <h3>For State University Students</h3>
            <ul>
              <li>Mahapola Higher Education Scholarship (merit-based financial aid).</li>
              <li>University Bursary Scheme (for financially disadvantaged students).</li>
            </ul>
            <h3>For Private University Students</h3>
            <ul>
              <li>SLIIT, NSBM, and CINEC offer merit and need-based scholarships.</li>
            </ul>
            <h3>International Scholarships</h3>
            <ul>
              <li>Commonwealth Scholarships</li>
              <li>Australia Awards Scholarships</li>
              <li>Erasmus+ Scholarships</li>
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

export default Apply;
