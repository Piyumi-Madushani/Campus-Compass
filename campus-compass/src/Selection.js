import React, { useState } from "react";
import "./Selection.css";

const data = [
  {
    id: 1,
    university: "University of Colombo",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/University_of_Colombo_logo.png/120px-University_of_Colombo_logo.png",
    courses: ["Computer Science", "Law", "Economics"],
  },
  {
    id: 2,
    university: "University of Peradeniya",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/University_of_Peradeniya_logo.png/120px-University_of_Peradeniya_logo.png",
    courses: ["Engineering", "Agriculture", "Medicine"],
  },
  {
    id: 3,
    university: "University of Moratuwa",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/University_of_Moratuwa_crest.png/120px-University_of_Moratuwa_crest.png",
    courses: ["Architecture", "Computer Science", "Business Analytics"],
  },
  {
    id: 4,
    university: "University of Sri Jayewardenepura",
    logo: "https://www.sjp.ac.lk/wp-content/uploads/2020/10/usjp-logo-150x150.png",
    courses: ["Management", "Biological Science", "Accounting"],
  },
  {
    id: 5,
    university: "University of Kelaniya",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/University_of_Kelaniya_logo.png/120px-University_of_Kelaniya_logo.png",
    courses: ["Medicine", "Arts", "Science"],
  },
];

function Selection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter(
      (item) =>
        item.university?.toLowerCase().includes(term) ||
        item.courses?.some((course) => course?.toLowerCase().includes(term))
    );

    setFilteredData(filtered);
  };

  return (
    <div className="Selection">
      <h1>Degree Courses and Universities in Sri Lanka</h1>
      <input
        type="text"
        placeholder="Search by university or course..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="cards-container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="card">
  <img src={item.logo} alt={`${item.university} Logo`} className="card-logo" />
  <div className="card-details">
    <h2>{item.university}</h2>
    <ul>
      {item.courses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  </div>
</div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Selection;
