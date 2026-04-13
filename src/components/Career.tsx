import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Dalwai Highschool Mirjoli</h5>
              </div>
              <h3>2015-2024</h3>
            </div>
            <p>
              Completed secondary education with a strong foundation in
              mathematics, science, and computer fundamentals. Developed early
              interest in technology and programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>Sahyadri Polytechnic Sawarde</h5>
              </div>
              <h3>2024-2026</h3>
            </div>
            <p>
              Currently pursuing Diploma in Computer Engineering (4th semester).
              Gained hands-on experience in web development, databases,
              programming languages, and project management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fresher - Seeking Internship</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively seeking internship opportunities to gain practical
              industry experience and grow technical skills in web development,
              backend technologies, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
