import React from "react";

// Main App Component
function International() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>

      <Section
        title="Are there exchange programs with foreign universities?"
        content={
          <>
            <p>
              Yes, several universities in Sri Lanka have partnerships with foreign universities, offering exchange programs for students.
              These programs typically allow students to study abroad for a semester or year, gaining international experience while earning
              credits towards their degree. Some notable universities with exchange programs include:
            </p>
            <h3>State Universities</h3>
            <ul>
              <li>University of Colombo</li>
              <li>University of Peradeniya</li>
              <li>University of Moratuwa</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>SLIIT</li>
              <li>NSBM Green University</li>
              <li>CINEC Campus</li>
            </ul>
            <p>Students must meet certain academic criteria and apply through their university's international office to participate in these programs.</p>
          </>
        }
      />

      <Section
        title="Can I transfer credits to foreign universities?"
        content={
          <>
            <p>
              Yes, many universities in Sri Lanka have agreements with foreign universities that allow students to transfer credits for courses
              they have completed. However, the acceptance of transfer credits depends on the specific policies of the foreign university. 
              Some general steps include:
            </p>
            <ul>
              <li>Consult the academic advisor at your university for transfer options.</li>
              <li>Ensure that the courses you plan to transfer align with the curriculum of the foreign university.</li>
              <li>Obtain approval from both universities before starting the transfer process.</li>
            </ul>
            <p>
              Private universities tend to have more flexible credit transfer agreements with foreign institutions, especially those that have
              international collaborations.
            </p>
          </>
        }
      />

      <Section
        title="Are there dual degree programs in Sri Lanka?"
        content={
          <>
            <p>
              Yes, some universities in Sri Lanka offer dual degree programs in collaboration with foreign universities. These programs allow
              students to earn degrees from both the local and international universities. Some examples of dual degree programs include:
            </p>
            <h3>State Universities</h3>
            <ul>
              <li>University of Moratuwa offers dual degrees in Engineering in collaboration with overseas institutions.</li>
              <li>University of Colombo offers dual degrees in Business Administration with international universities.</li>
            </ul>
            <h3>Private Universities</h3>
            <ul>
              <li>SLIIT offers dual degrees in Information Technology in partnership with universities in the UK and Australia.</li>
              <li>NSBM Green University offers dual degrees in various fields like Business and Engineering with foreign universities.</li>
            </ul>
            <p>
              These programs typically have higher entry requirements and may involve studying at both local and overseas campuses.
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

export default International;
