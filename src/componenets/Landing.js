import React, { useEffect, useState } from "react";

const Landing = () => {
  const [landingData, setLandingData] = useState(null);

useEffect(() => {
  fetch("/data/landingData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setLandingData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  // إذا لم يتم تحميل البيانات بعد
  if (!landingData) return <p>Loading...</p>;

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          <span>{landingData.title}</span>
        </h1>
        <h2>{landingData.subtitle}</h2>
        <h3>{landingData.contactPrompt}</h3>
        <p>{landingData.description}</p>
        <div className="social-media">
          {landingData.socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
        <a href={landingData.contactButton.href} className="btn">
          {landingData.contactButton.text}
          <i className={landingData.contactButton.iconClass}></i>
        </a>
      </div>
      <div className="home-img">
        <img
          loading="lazy"
          src={landingData.imageSrc}
          alt={landingData.imageAlt}
        />
      </div>
    </section>
  );
};

export default Landing;
