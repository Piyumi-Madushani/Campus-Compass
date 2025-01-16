import React from "react";

// Main App Component
function Miscellaneouss() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>

      <Section
        title="How can I verify if a university is UGC approved?"
        content={
          <>
            <p>
              To verify if a university is UGC-approved, you can follow these steps:
            </p>
            <ul>
              <li>Visit the official UGC website: <a href="https://www.ugc.ac.lk" target="_blank" rel="noopener noreferrer" style={{ color: '#4ac6ff' }}>UGC Official Website</a>.</li>
              <li>Check the list of recognized universities under the "Recognized Institutions" section.</li>
              <li>Contact the UGC directly through their website if you have any doubts regarding a specific university's approval status.</li>
            </ul>
            <p>
              UGC approval is a vital requirement for universities to ensure they meet the national educational standards in Sri Lanka.
            </p>
          </>
        }
      />

      <Section
        title="How do I contact a specific university?"
        content={
          <>
            <p>
              You can contact a specific university in Sri Lanka using the following methods:
            </p>
            <ul>
              <li>Visit the university's official website and look for the "Contact Us" section, where you can find phone numbers, email addresses, and postal addresses.</li>
              <li>Most universities have dedicated departments such as Admissions, Student Affairs, or International Relations that can be contacted for inquiries.</li>
              <li>University social media profiles often provide updates and contact information for quick responses.</li>
            </ul>
            <p>
              It is recommended to reach out directly through official channels to ensure you get the most accurate and up-to-date information.
            </p>
          </>
        }
      />

      <Section
        title="Are courses conducted in English, Sinhala, or Tamil?"
        content={
          <>
            <p>
              The language of instruction in Sri Lankan universities varies depending on the university and the program:
            </p>
            <h3>State Universities:</h3>
            <ul>
              <li>Most programs are taught in English, particularly in fields like Engineering, Medicine, and IT.</li>
              <li>Some programs may offer courses in Sinhala or Tamil, especially in social sciences and humanities, depending on the region.</li>
            </ul>
            <h3>Private Universities:</h3>
            <ul>
              <li>Courses are generally conducted in English across all programs.</li>
            </ul>
            <p>
              You can check the language of instruction in the university’s prospectus or program details. For students who need language assistance, some universities may offer support in Sinhala or Tamil.
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

export default Miscellaneouss;
