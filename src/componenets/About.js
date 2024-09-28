import React, { useEffect, useState } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    
    fetch("/data/aboutData.json") 
      .then((response) => response.json())
      .then((data) => setAboutData(data));
  }, []);

  
  if (!aboutData) return <p>Loading...</p>;

  return (
    <section className="about" id="about">
      <div className="all-about-content">
        <div className="about-content">
          <h1><span>{aboutData.title} </span></h1>
          <h2>{aboutData.subtitle}</h2>
          {aboutData.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <a href={`tel:${aboutData.contact.phone}`} className="btn">
            تواصل معنا <i className="bx bxs-phone-call"></i>
          </a>
          <a href={aboutData.contact.whatsapp} className="btn">
            تواصل معنا <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
