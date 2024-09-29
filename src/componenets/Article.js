import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = () => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    
    fetch("/data/articlesData.json") 
      .then((response) => response.json())
      .then((data) => setArticlesData(data));
  }, []);

  return (
    <section className="boxes-article">
      <h2>خدماتنا</h2>
      {articlesData.map((article, index) => (
        <div className="box-article" key={index}>
          <h1>
            <Link to={article.link}>{article.title}</Link>
          </h1>
          <p><Link to={article.link}></Link>{article.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Article;
