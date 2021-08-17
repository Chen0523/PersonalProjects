import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Coocbooc from "../img/coocbooc5.png";
import Tech from "../img/techtree.png";

const Current = () => {

  return (
    <div className="current_container">
        <div className = "img">  <img src={Tech} alt=" Tech tree Illustration"></img></div>
        <div className ="des">
            <div className = "br">TechTree</div>
            <ul>Status: <li>In development. </li></ul>
            <ul>Persona:
                <li> People who want to learn new skills in their free time and don't know where to start with or overwhelmed by diverse online courses.</li>
                <li> Young professional who wants to visualize their skills as a tech-tree</li>
            </ul>
            <ul >Goal:
                <li>A website where users can find the overview of the study routine for a certain skill such as web development and graphic design.</li>
            </ul>

        </div>

        <div className ="des">
            <div className = "br">COOCBOOC</div>
            <ul>Status
                <li> Currently closed. (Online from Aug 2020 - Jan 2021.)</li>
            </ul>
            <ul >Persona:
                <li>Young workers who want to organize themed movie nights with snacks from the movie.</li>
                <li>Moms who want to prepare interesting food for the kids</li>
                <li>Food bloggers who want to get inspired and reproduce the food in the books/movies.</li>
            </ul>
            <ul >Goal:
                <li>A website where user can search recipes from a certain book/movie or just get inspired by looking around.
                    The users can also upload their own recipes after a quick reigsteration</li>
            </ul>
            <ul >Personal Goal:
            <li> To learn the skills of full-stack web-development.</li>
            </ul>
            <ul>Technology used:
            <li> React, React Hooks, CSS, AWS Cloud, AWS Amplify, GraphQL, Facebook federated login, Google Analytics, Adobe Illustrator,
            Design thinking, Graphic design</li>
            </ul>
        </div>
        <div className = "img">
            <img src={Coocbooc} alt=" Book with Daly Eggs Illustration"></img>
        </div>
    </div>
  );
};
export default Current;


