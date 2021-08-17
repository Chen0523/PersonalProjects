import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Coocbooc from "../img/coocbooc.png";
import Tech from "../img/tech.png";

const TechTree = () => {

  return (
    <div className="current_container">
        <div className = "img1">  <img src={Tech} alt=" Book with Daly Eggs Illustration"></img></div>
        <div className ="des1">
            <div className = "br">TechTree</div>
            Status: In development. Demo can be found here
            <ul>Persona:
                <li> People who wants to learn new skills in their free time and don't know where to start with</li>
                <li> Young professional who wants to visualize their skills as a tech-tree</li>
            </ul>
            <ul >Goal:
                <li>A website where user can find the overview of the study routine for a certain skill such as web development and graphic design</li>
            </ul>

        </div>
        <div className = "img2">
            <img src={Coocbooc} alt=" Book with Daly Eggs Illustration"></img>
        </div>
        <div className ="des2">
            <div className = "br">COOCBOOC</div>
            Status: Online from Aug 2020 - Jan 2021. Currently closed.

            <ul >Persona:
                <li>Young workers who want to organize themed movie evening with snacks from the movie.</li>
                <li>Moms who want to prepare some interesting food for the kids</li>
                <li>Food bloggers who like to get inspired and reproduce the food in the books/movies.</li>
            </ul>
            <ul >Goal:
                <li>A website where user can search recipes from a certain book/movie or just get inspired by looking around.
                    The users can also upload their own recipes after a quick reigsteration</li>
            </ul>
            <ul >Personal Goal:
            <li> To learn the skills of full-stack web-development.</li>
            </ul>
            <ul>Technology used:
            <li> React, React Hooks, CSS, AWS Cloud, AWS Amplify, GraphQL, Facebook login, Google analytics, Adobe Illustrator,
            Design thinking, Graphic design</li>
            </ul>
        </div>
    </div>
  );
};
export default TechTree;


