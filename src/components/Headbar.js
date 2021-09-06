import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
// import Gallery from "./gallery";


const Headbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="headbar">
        <div className = "titleBar n">
            <div className = "title">
                PERSONAL PROJECTS</div>
            {/*<div className = "chen">CHEN YANG</div>*/}
        </div>
        <div className="bar">
            <Link className="linkStyle" to={"/"}>
                    CURRENT
            </Link>
            <Link className="linkStyle" to={"/justforfun"}>
                    FUN IDEAS
            </Link>
        </div>
    </div>
  );
};
export default Headbar;



      {/*<div className="featured">*/}
      {/*  <div className="homeR">*/}
      {/*  </div>*/}

      {/*  <div className="homeL">*/}
      {/*    <div className="home-t"> Recipes from Imaginary world</div>*/}
      {/*    <div className="home-b infoParagraph">*/}
      {/*      <i className="fas fa-quote-left home-q2"></i>*/}
      {/*      <i className="fas fa-quote-left home-q"></i> Ever wondered how does*/}
      {/*      Harry Potter's magic flavour taste like? Or always wanted to have a*/}
      {/*      Jane-Austin-style afternoon tea? Join us and start a fantastic*/}
      {/*      journey with our collection of tasty books! Explore{" "}*/}
      {/*      <Link to="/about" className="linkStyle">*/}
      {/*        <u> our CONCEPT</u>.*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
