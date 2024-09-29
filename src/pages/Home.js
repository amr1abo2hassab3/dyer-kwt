import React from "react";
import Landing from "../componenets/Landing";
import About from "../componenets/About";
import Services from "../componenets/Services";
import Article from "../componenets/Article";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      <Article />
    </div>
  );
};

export default Home;
