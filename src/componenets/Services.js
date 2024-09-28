import React, { useEffect, useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // جلب البيانات من ملف JSON
    fetch("/data/servicesData.json") // تأكد من المسار صحيح
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <span>صباغ </span> الكويت
      </h2>
      <div className="projects-box">
        {servicesData.map((service, index) => (
          <div className="project-card" key={index}>
            <img
              src={service.img}
              alt={`Project ${index + 1}`}
              loading="lazy"
            />
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <a href={`tel:${service.phone}`} className="btn">
              تواصل معنا <i className="bx bxs-phone-call"></i>
            </a>
            <a href={service.whatsapp} className="btn">
              تواصل معنا <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
