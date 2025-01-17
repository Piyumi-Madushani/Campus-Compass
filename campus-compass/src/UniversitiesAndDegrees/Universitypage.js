import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Universitypage.css";
import UOCLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityofColomboLogo.png";
import UOPLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfPeradeniyaLogo.png";
import UOSJLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfSriJayawardanapuraLogo.png";
import UOKLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfKelaniyaLogo.png";
import UOMLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfMoratuwaLogo.png";
import UOJLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfJaffnaLogo.png";
import UORLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfRuhunaLogo.png";
import EULogo from "../UniversitiesAndDegrees/UniversityLogos/EasternUniversityLogo.png";
import SEULogo from "../UniversitiesAndDegrees/UniversityLogos/SouthEasternUniversityLogo.png";
import RULogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfRajarataLogo.png";
import SULogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOfSabaragamuwaLogo.png";
import WULogo from "../UniversitiesAndDegrees/UniversityLogos/WayambaUniversityLogo.png";
import UWULogo from "../UniversitiesAndDegrees/UniversityLogos/UvaWellassaUniversityLogo.jpg";
import UOVPALogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityOf-VisualAndPerformingArtsLogo.png";
import GWULogo from "../UniversitiesAndDegrees/UniversityLogos/GampahaWickramarachchiUniversityOfIndigenousMedicineLogo.png";
import UOVLogo from "../UniversitiesAndDegrees/UniversityLogos/UniversityofVavuniyaLogo.png";
import TOULogo from "../UniversitiesAndDegrees/UniversityLogos/OpenUniversityLogo.png";

const data = [
  {
    all_Courses: {
      art_stream_courses: ["Arts", "Arts(SP)", "Arts(SBA)", "Communication Studies", "Place & Conflict Resolurion", "Islamic Studies", "Arabic Language", "Teacing English As A Second Languge(TESL)", "Social Work", "Arts-Information Technology", "Music", "Dance", "Drama & Theatre", "Visual Arts", "Visual & Technological Arts", "Art & Design"],
      commerce_stream: ["Management", "Management (Public) Honours", "Real Estate Management & Valuation", "Commerce", "Management Studies(TV)", "Business Information Systems(Honours)", "Accounting Information System", "Banking & Insurance"],
      biology_stream_courses: ["Madicine", "Dental Surgery", "Veterinary Science", "Agricultural Technology & Management", "Agriculture", "Food Science & Nutrition", "Food Science & Technology", "Ayuruvedic Medicine & Surgery", "Unani Medcine & Surgery", "Siddha Medicine & Surgery", "Biological Science", "Applyed Sciences(Biological Science)", "Health Promotion", "Nursing", "Pharmacy", "Medical Laboratory Sciences", "Radiography", "Physiotherapy", "Biochemistry & Molecular Biology", "Fisheries & Marine Sciences", "Environmental Conservation & Management", "Animal sciences & Fisheries", "Food Production & Technology Management", "Agricultural Resource Management & Technology", "Agribusiness Management", "Green Technology", "Animal Production & Food Technology", "Export Agriculture", "Aquatic Resources Technology", "Occupational Therapy", "Optometry", "Applied Chemistry", "Indigenous Medical Resources", "Aquatic Bioresources", "Urban Bioresources", "Medical Imagine Technology", "Speech & Hearing Sciences"],
      maths_stream_courses: ["Engineering", "Engineering(EM)-Earth Resources Engineering", "Engineering(TM)-Textile & Apparel Engineering", "Transport Management & Logistics Engineering(TMEL)", "Physical Science", "Computer Science", "Applied Science(Physical Science)", "Industrial Statistics & Mathematical Finance", "Statistics & Operations Research", "Physical Science - ICT", "Artificial Intelligence", "Electronics & Computer Science", "Data Science"],
      engineering_technology_stream_courses: ["Enginnering Technology (ET)"],
      biosystem_techechnology_stream_courses: ["Biosystem Technology (BST)"],
      infomation_comunication_technology_stream_courses: ["Information & Communication Technology (ICT)"],
      different_subject_stream_courses: ["Information Technology", "Management & Information Technology(MIT)", "Quantity Surveying", "Surveying Science", "Town & Country Planning", "Architecture", "Fashion Design & Product Development", "Landscape Architecture", "Design", "Law", "Facilities Management", "Management & Information Technology(SEUSL)", "Science & Technology", "Computer Science & Technology", "Entrepreneurship & Management", "Industrial Information Technology", "Mineral Resources & Technology", "Hospitality, Tourism and Events Management", "Physical Education", "Sports Science & Management", "Information Technology & Management", "Tourism & Hospitality Management", "Information Systems", "Translation Studies", "Film & Television Studies", "Project Management", "Information and Communication Technology-(ICT)", "Software Engineering", "Food Business Management", "Marine and Fresh Water Sciences", "Business Science", "Financial Engineering", "Geographical Information Science", "Financial Mathematics and Industrial Statistics", "Human Resource Development", "Health Information and Communication Technology", "Health Tourism and Hospitality Management", "Biomedical Technology", "Indigenous Pharmaceutical Technology", "Yoga and Parapsychology", "Social Studies in Indigenous Knowledge", "Financial Economics", "English Language & Applied Linguistics", "Creative Music Technology and Production", "Plantation Management and Technology", "Primary Education", "Polymer Science and Industrial Management"],
    },

    all_Courses_Types: ["Postgraduate", "Undergraduate", "Certificate", "Online"],
  },

  // university of Sri Jayawardanapura
  { 
    id: 1, 
    university: "University of Sri Jayawardanapura", 
    logo: UOSJLogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["7"], ["1"]],
        [["8"], ["1"]],
        [["9"], ["1"]],
        [["10"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
        [["1"], ["1"]],
        [["2"], ["1"]],
        [["3"], ["1"]],
        [["5"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["1"], ["1"]],
        [["6"], ["1"]],
        [["10"], ["1"]],
        [["13"], ["1"]],
        [["14"], ["1"]],
        [["15"], ["1"]],
        [["30"], ["1"]],
        [["33"], ["1"]],
        [["34"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["9"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["19"], ["1"]],
        [["22"], ["1"]],
        [["27"], ["1"]],
        [["41"], ["1"]],
        [["43"], ["1"]],
        [["46"], ["1"]],
      ],
    },
    urls: ["https://www.sjp.ac.lk/", "https://www.graduate.sjp.ac.lk/", "https://www.sjp.ac.lk/undergraduate-courses/", "https://external.sjp.ac.lk/", "https://www.sjp.ac.lk/international-students/", "https://www.sjp.ac.lk/category/courses/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "External Degrees & Extention Courses", "Courses For Foreign Students", "Upcomming Courses"], 
  },

  // university of Kelaniya
  { 
    id: 2, 
    university: "University of Kelaniya", 
    logo: UOKLogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["7"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
        [["3"], ["1"]],
        [["6"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["10"], ["1"]],
        [["20"], ["1"]],
        [["29"], ["1"]],
        [["31"], ["1"]],
        [["36"], ["1"]],
      ],
      maths_stream_courses: [
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["9"], ["1"]],
        [["11"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["1"], ["1"]],
        [["19"], ["1"]],
        [["23"], ["1"]],
        [["24"], ["1"]],
        [["27"], ["1"]],
        [["31"], ["1"]],
      ],
    },
    urls: ["https://www.kln.ac.lk/","https://www.kln.ac.lk/index.php/graduate", "https://www.kln.ac.lk/index.php/undergraduate", "https://www.kln.ac.lk/index.php/external", "https://www.kln.ac.lk/index.php/diploma", "https://www.kln.ac.lk/index.php/certificates"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "External Courses", "Diploma Courses", "Certificate Courses"], 
  },

  // university  of colombo
  {
    id: 3,
    university: "University of Colombo",
    logo: UOCLogo,
    courses: {
      art_stream_courses: [
        [["0"], ["1"]],
        [["1"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["7"], ["1"]],
        [["8"], ["1"]],
        [["10"], ["1"]],
        [["13"], ["1"]],
        [["17"], ["1"]],
        [["18"], ["1"]],
        [["35"], ["1"]],
      ],
      maths_stream_courses: [
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["7"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["9"], ["1"]],
        [["22"], ["1"]],
        [["45"], ["1"]],
      ],
    },
    urls: [
      "https://cmb.ac.lk/",
      "https://cmb.ac.lk/postgraduate-programmes",
      "https://cmb.ac.lk/undergraduate-programmes",
      "https://cmb.ac.lk/certificate-courses",
      "https://cmb.ac.lk/online-courses"
    ],
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "Certificate Courses", "Online Courses"],
  },

  // university of Jaffna
  { 
    id: 4, 
    university: "University of Jaffna", 
    logo: UOJLogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["10"], ["1"]],
        [["11"], ["1"]],
        [["15"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
        [["3"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["9"], ["1"]],
        [["10"], ["1"]],
        [["13"], ["1"]],
        [["14"], ["1"]],
        [["15"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["5"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["9"], ["1"]],
        [["18"], ["1"]],
        [["23"], ["1"]],
      ],
    },
    urls: ["https://www.jfn.ac.lk/", "https://www.jfn.ac.lk/postgraduate-programmes/", "https://www.jfn.ac.lk/degree-programmes/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses"], 
  },

  // university of Ruhuna
  { 
    id: 5, 
    university: "University of Ruhuna", 
    logo: UORLogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["10"], ["1"]],
        [["14"], ["1"]],
        [["15"], ["1"]],
        [["19"], ["1"]],
        [["23"], ["1"]],
        [["24"], ["1"]],
        [["25"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["5"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["29"], ["1"]],
        [["33"], ["1"]]
      ],
    },
    urls: ["https://ruh.ac.lk/index.php/en/", "https://www.ruh.ac.lk/index.php/en/component/sppagebuilder/?view=page&id=39", "https://www.ruh.ac.lk/index.php/en/component/sppagebuilder/?view=page&id=39", "https://www.dceu.ruh.ac.lk/allcourses.php?id=001", "https://www.dceu.ruh.ac.lk/allcourses.php?id=002",], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "External Courses", "Certificate & Diploma courses",], 
  },

  // university of Peradeniya
  { 
    id: 6, 
    university: "University of Peradeniya", 
    logo: UOPLogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["8"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["1"], ["1"]],
        [["2"], ["1"]],
        [["3"], ["1"]],
        [["6"], ["1"]],
        [["10"], ["1"]],
        [["13"], ["1"]],
        [["14"], ["1"]],
        [["15"], ["1"]],
        [["16"], ["1"]],
        [["17"], ["1"]],
        [["21"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["8"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["9"], ["1"]],
        [["32"], ["1"]]
      ],
    },
    urls: ["https://www.pdn.ac.lk/", "https://www.pdn.ac.lk/", "https://www.pdn.ac.lk/undergraduates/#", "https://www.pdn.ac.lk/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "Short Courses"], 
  },

  // Eastern University, Sri Lanka
  { 
    id: 7, 
    university: "Eastern University, Sri Lanka", 
    logo: EULogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["3"], ["1"]],
        [["10"], ["1"]],
        [["11"], ["1"]],
        [["12"], ["1"]],
        [["14"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
        [["3"], ["1"]],
        [["4"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["9"], ["1"]],
        [["10"], ["1"]],
        [["13"], ["1"]],
      ],
      maths_stream_courses: [
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["6"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["23"], ["1"]],
      ],
    },
    urls: ["https://www.esn.ac.lk/", "https://www.esn.ac.lk/academic-programs/postgraduate", "https://www.esn.ac.lk/academic-programs/undergraduate", "https://www.esn.ac.lk/academic-programs/diploma", "https://www.esn.ac.lk/academic-programs/certificate"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "Diploma Courses", "Certificate Courses"], 
  },

  // Sabaragamuwa University of Sri Lanka
  { 
    id: 8, 
    university: "Sabaragamuwa University of Sri Lanka", 
    logo: SULogo, 
    courses: { 
      art_stream_courses: [
        [["2"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["6"], ["1"]],
        [["11"], ["1"]],
      ],
      maths_stream_courses: [
        [["6"], ["1"]],
        [["12"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["3"], ["1"]],
        [["18"], ["1"]],
        [["19"], ["1"]],
        [["21"], ["1"]],
        [["22"], ["1"]],
        [["23"], ["1"]],
        [["27"], ["1"]],
        [["28"], ["1"]],
      ],
    },
    urls: ["https://www.sab.ac.lk/", "https://www.sab.ac.lk/"], 
    url_names: ["Home Page", "Postgraduate Courses, Undergraduate Courses, Diploma Courses"], 
  },

  // Uva Wellassa University of Sri Lanka
  { 
    id: 9, 
    university: "Uva Wellassa University of Sri Lanka", 
    logo: UWULogo, 
    courses: {
      biology_stream_courses: [
        [["0"], ["1"]],
        [["26"], ["1"]],
        [["27"], ["1"]],
        [["28"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["12"], ["1"]],
        [["13"], ["1"]],
        [["14"], ["1"]],
        [["15"], ["1"]],
        [["16"], ["1"]],
        [["17"], ["1"]],
        [["34"], ["1"]],
        [["42"], ["1"]],
        [["44"], ["1"]],
      ],
    },
    urls: ["https://www.uwu.ac.lk/", "https://www.uwu.ac.lk/"], 
    url_names: ["Home Page", "Postgraduate Courses, Undergraduate Courses, Diploma Courses"], 
  },

  // Rajarata University of Sri Lanka
  { 
    id: 10, 
    university: "Rajarata University of Sri Lanka", 
    logo: RULogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["11"], ["1"]],
        [["12"], ["1"]],
      ],
      maths_stream_courses: [
        [["6"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["21"], ["1"]],
        [["26"], ["1"]],
      ],
    },
    urls: ["https://www.rjt.ac.lk/", "https://www.rjt.ac.lk/postgraduate-admission/", "https://www.rjt.ac.lk/academic-programs/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses"], 
  },

  // university of Moratuwa
  { 
    id: 11, 
    university: "University of Moratuwa", 
    logo: UOMLogo, 
    courses: {
      biology_stream_courses: [
        [["0"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["1"], ["1"]],
        [["2"], ["1"]],
        [["3"], ["1"]],
        [["10"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["0"], ["1"]],
        [["2"], ["1"]],
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["6"], ["1"]],
        [["7"], ["1"]],
        [["8"], ["1"]],
        [["10"], ["1"]],
        [["20"], ["1"]],
        [["30"], ["1"]],
      ],
    },
    urls: ["https://uom.lk/", "https://uom.lk/courses"], 
    url_names: ["Home Page", "Postgraduate Courses, Undergraduate Courses, Research degrees, Tranning Programmes, Short Courses",], 
  },

  // South Eastern University of Sri Lanka
  { 
    id: 12, 
    university: "South Eastern University of Sri Lanka", 
    logo: SEULogo, 
    courses: { 
      art_stream_courses: [
        [["0"], ["1"]],
        [["5"], ["1"]],
        [["6"], ["1"]],
      ],
      commerce_stream: [
        [["0"], ["1"]],
        [["3"], ["1"]],
      ],
      biology_stream_courses: [
        [["10"], ["1"]],
      ],
      maths_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["11"], ["1"]],
      ],
    },
    urls: ["https://www.seu.ac.lk/", "https://www.seu.ac.lk/postgraduate_studies.php", "https://www.seu.ac.lk/undergraduate_studies.php"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses"], 
  },

  // Wayamba University of Sri Lanka
  { 
    id: 13, 
    university: "Wayamba University of Sri Lanka", 
    logo: WULogo, 
    courses: {
      commerce_stream: [
        [["0"], ["1"]],
      ],
      biology_stream_courses: [
        [["0"], ["1"]],
        [["4"], ["1"]],
        [["5"], ["1"]],
        [["22"], ["1"]],
      ],
      maths_stream_courses: [
        [["6"], ["1"]],
      ],
      engineering_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      biosystem_techechnology_stream_courses: [
        [["0"], ["1"]],
      ],
    },
    urls: ["https://www.wyb.ac.lk/", "https://www.wyb.ac.lk/postgraduate/", "https://www.wyb.ac.lk/undergraduate/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses"], 
  },

  // University of Vavuniya, Sri Lanka
  { 
    id: 14, 
    university: "University of Vavuniya, Sri Lanka", 
    logo: UOVLogo, 
    courses: {
      commerce_stream: [
        [["4"], ["1"]],
        [["7"], ["1"]],
      ],
      biology_stream_courses: [
        [["11"], ["1"]],
      ],
      maths_stream_courses: [
        [["6"], ["1"]],
      ],
      infomation_comunication_technology_stream_courses: [
        [["0"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["25"], ["1"]],
        [["26"], ["1"]],
      ],
    },
    urls: ["https://vau.ac.lk/", "https://vau.ac.lk/degree-programmes/"], 
    url_names: ["Home Page", "Degree Programmes"], 
  },

  // Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka
  { 
    id: 15, 
    university: "Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka", 
    logo: GWULogo, 
    courses: {
      biology_stream_courses: [
        [["7"], ["1"]],
        [["32"], ["1"]],
      ],
      different_subject_stream_courses: [
        [["35"], ["1"]],
        [["36"], ["1"]],
        [["37"], ["1"]],
        [["38"], ["1"]],
        [["39"], ["1"]],
        [["40"], ["1"]],
      ],
    },
    urls: ["https://gwu.ac.lk/", "https://gwu.ac.lk/index.php/component/sppagebuilder/?view=page&id=54", "https://gwu.ac.lk/index.php/undergraduate", "https://gwu.ac.lk/index.php/certificate-diploma"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "Certificate & Diploma Courses"], 
  },

  // University of the Visual & Performing Arts
  { 
    id: 16, 
    university: "University of the Visual & Performing Arts", 
    logo: UOVPALogo, 
    courses: { 
      art_stream_courses: [
        [["10"], ["1"]],
        [["11"], ["1"]],
        [["12"], ["1"]],
        [["13"], ["1"]],
      ],
    },
    urls: ["https://vpa.ac.lk/", "https://vpa.ac.lk/postgraduate-degree/", "https://vpa.ac.lk/undergraduate-programs/", "https://vpa.ac.lk/diploma-programs/"], 
    url_names: ["Home Page", "Postgraduate Courses", "Undergraduate Courses", "Diploma Courses"], 
  },

  // The Open University of Sri Lanka
  { 
    id: 17, 
    university: "The Open University of Sri Lanka", 
    logo: TOULogo, 
    courses: {},
    urls: ["https://ou.ac.lk/central/"], 
    url_names: ["Home Page"], 
  },


  
];

function Selection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [filteredData, setFilteredData] = useState(data.slice(1)); // Exclude metadata
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBar = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    applyFilters(term, selectedUniversity, selectedStream, selectedCourse);
  };

  const applyFilters = (search, university, stream, course) => {
    const keywords = search.split(/[^a-zA-Z0-9]+/).filter((keyword) => keyword.trim() !== "");
  
    const filtered = data.slice(1).filter((item) => {
      const { all_Courses } = data[0];
  
      const universityMatch = !university || item.university.toLowerCase().includes(university.toLowerCase());
      
      // Check if stream is part of the search term
      const streamMatch = !stream || Object.keys(item.courses || {}).some((key) => 
        key.toLowerCase().includes(stream.toLowerCase())
      );
  
      const courseMatch =
        !course ||
        Object.keys(item.courses || {}).some((key) =>
          (item.courses[key] || []).some(([courseIndices]) =>
            courseIndices.some(
              (index) => all_Courses[key]?.[index] === course
            )
          )
        );
  
      const searchMatch = keywords.every((keyword) =>
        item.university.toLowerCase().includes(keyword) ||
        Object.keys(item.courses || {}).some((key) =>
          (item.courses[key] || []).some(([courseIndices]) =>
            courseIndices.some(
              (index) => all_Courses[key]?.[index]?.toLowerCase().includes(keyword)
            )
          ) ||
          key.toLowerCase().includes(keyword) // Check for stream name in the search
        )
      );
  
      return universityMatch && streamMatch && courseMatch && searchMatch;
    });
  
    setFilteredData(filtered);
  };  

  const handleUniversityFilter = (event) => {
    const value = event.target.value;
    setSelectedUniversity(value);
    applyFilters(searchTerm, value, selectedStream, selectedCourse);
  };

  const handleStreamFilter = (event) => {
    const value = event.target.value;
    setSelectedStream(value);
    applyFilters(searchTerm, selectedUniversity, value, selectedCourse);
  };

  const handleCourseFilter = (event) => {
    const value = event.target.value;
    setSelectedCourse(value);
    applyFilters(searchTerm, selectedUniversity, selectedStream, value);
  };

  return (
    // <html>
      // <head>
      //   <meta charset="UTF-8" />
      //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //   <title>Universities in sri lanka</title>
      // </head>
      // <body>
      //   <header>
      //     <h2>this is heaer of body</h2>
      //   </header>
        <main className="unipage-main-container">
          {/* <h1>this is main content</h1> */}
          <div className="page-title-container">
            <h1 className="unipage-title">UNIVERSITIES & DEGREE COURSES IN SRI LANKA</h1>
          </div>
          
          <div className="universities-container">

            <div className="uni-page-filters-container">
              
              <div className="uni-page-filter-box univrsity-dropdown-filter">
                <label className="unipage-filter-lable dropdownlabel">Universities</label>
                <select value={selectedUniversity} onChange={handleUniversityFilter} className="dropdown-list-box">
                  <option value="">Select University</option>
                  {data.slice(1).map((uni) => (
                    <option key={uni.id} value={uni.university}>
                      {uni.university}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="uni-page-filter-box stream-dropdown-filter">
                <label className="unipage-filter-lable dropdownlabel">Stream</label>
                <select value={selectedStream} onChange={handleStreamFilter} className="dropdown-list-box">
                  <option value="">Select Stream</option>
                  {Object.keys(data[0].all_Courses).map((stream) => (
                    <option key={stream} value={stream}>
                      {stream.replace("_courses", "").split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="uni-page-filter-box courses-dropdown-filter">
                <label className="unipage-filter-lable dropdownlabel">Courses</label>
                <select value={selectedCourse} onChange={handleCourseFilter} className="dropdown-list-box">
                <option value="">Select Course</option>
                {Object.entries(data[0].all_Courses).map(([stream, courses]) => (
                  <optgroup key={stream} label={stream.replace("_courses", "").split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </optgroup>
                ))}
                </select>
              </div>
              
              <div className="uni-page-filter-box unipage-search-box-filter">
              <label className="unipage-filter-lable searchlabel" id="searchBox" onclick="expand"><FaSearch className="search-icon" /></label>
                <div className={`search-container ${isExpanded ? "expanded" : ""}`} onClick={toggleSearchBar}>
             
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input-box"
                />
              </div>

            </div>
            </div>

            <div className="cards-container">
              {filteredData.length > 0 ? (
                filteredData.map((item) => {
                  const { all_Courses, all_Courses_Types } = data[0];

                  return (
                    <div key={item.id} className="card-container">

                      <div class="card-box card-imagebox">
                        {/* image */}
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.university || "University"} Logo`}
                            className="uni-card-logo"
                          />
                        ) : (
                          <p className="no-logo">University logo not available</p>
                        )}
                      </div>

                      <div class="card-box card-headbox">
                        {/* head */}
                        <h3 className="univesity-name">{item.university || "University Name Not Available"}</h3>
                      </div>

                      <div class="card-box card-bodybox">
                        {/* body */}
                        {Object.keys(item.courses || {}).map((stream) => (
                          <div key={stream} className="university-courses">
                            <h4 className="university-courses-list-title">{stream.replace("_courses", "").split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}</h4>
                            <ul className="university-courses-list">
                              {(item.courses[stream] || []).map(([courseIndices, typeIndices], index) => {
                                const courses = courseIndices.map(
                                  (courseIndex) => all_Courses[stream]?.[courseIndex] || "Unknown Course"
                                );
                                const types = (typeIndices || []).map(
                                  (typeIndex) => all_Courses_Types[typeIndex]
                                );

                                return (
                                  <li key={index}>
                                    {courses.join(", ")} -{" "}
                                    {types.length > 0 ? `(${types.join(", ")})` : "No type"}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div class="card-box card-footbox">
                        {/* foot */}
                        {item.urls && item.url_names && (
                          <ul className="university-url-list">
                            {item.url_names.map((name, index) => (
                              <li key={index}>
                                <a
                                  href={item.urls[index]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="url-link"
                                >
                                  Visit {name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No results found.</p>
              )}
            </div>
          </div>
        </main>
      //   <footer>
      //     <h2>this is footer of body</h2>
      //   </footer>
      // </body>
    // </html>
  );
}

export default Selection;