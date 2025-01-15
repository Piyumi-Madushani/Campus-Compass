import React from "react";

// Main App Component
function Finance() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>University Application Information - Sri Lanka</h1>

      <Section
        title="How much does it cost to study at a state or private university?"
        content={
          <>
            <h3>State Universities</h3>
            <p>
              The tuition fees at state universities in Sri Lanka are highly subsidized by the government. 
              The annual fees for undergraduate programs in state universities typically range from LKR 20,000 to LKR 50,000 
              depending on the program. However, additional costs such as registration fees, exam fees, and course materials may apply.
            </p>
            <h3>Private Universities</h3>
            <p>
              Tuition fees at private universities are significantly higher and vary based on the program and institution. 
              On average, undergraduate programs at private universities cost between LKR 300,000 to LKR 2,000,000 per year, 
              with fees for specialized programs like medicine and engineering being on the higher end of the scale.
            </p>
          </>
        }
      />

      <Section
        title="Are student loans available for university courses?"
        content={
          <>
            <p>
              Yes, student loans are available for university courses in Sri Lanka. The Sri Lanka Student Loan Scheme, 
              managed by the Bank of Ceylon and other financial institutions, provides loans for undergraduate students 
              pursuing education at state and recognized private universities. The loan is typically repaid after the completion 
              of the degree program, with an interest rate that is relatively low compared to commercial loans.
            </p>
            <p>
              Additionally, some universities may have their own loan schemes or offer guidance on obtaining loans for tuition fees.
            </p>
          </>
        }
      />

      <Section
        title="Do universities offer financial aid or fee waivers?"
        content={
          <>
            <h3>State Universities</h3>
            <ul>
              <li>Mahapola Higher Education Scholarship (merit-based financial aid for undergraduate students).</li>
              <li>University Bursary Scheme (for students from financially disadvantaged backgrounds).</li>
              <li>Other merit-based scholarships may be available based on academic achievements or extracurricular activities.</li>
            </ul>
            <h3>Private Universities</h3>
            <p>
              Private universities such as SLIIT, NSBM, and CINEC offer scholarships and financial aid programs to students who demonstrate 
              financial need or academic excellence. These may include partial fee waivers or merit-based scholarships.
            </p>
            <h3>International Students</h3>
            <p>
              Some universities also offer scholarships or fee reductions for international students, depending on the program and university.
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

export default Finance;
