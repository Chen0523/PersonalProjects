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
            <ul>Status: <li>In development.
                {/*Demo can be found <Link className = "linkStyle" to ={"/techTreeDemo"}> Hier -> </Link>*/}
            </li></ul>
            <ul>Persona:
                <li> People who want to learn new skills and don't know where to start with or are overwhelmed by diverse online courses.</li>
                <li> Young professionals who want to visualize their skills as a tech-tree.</li>
            </ul>
            <ul >Goal:
                <li>A website where users can find the overview of the study routine for a certain skill such as web development.
                Users can also find corresponding </li>
            </ul>

        </div>

        <div className ="des">
            <div className = "br">COOCBOOC</div>
            <ul>Status
                <li> Currently closed. (Online from Aug 2020 - Jan 2021.)
                    More Infos can be found <a style = {{color:"#4F4847", fontWeight:"bold"}} target="_blank" href="https://www.producthunt.com/posts/coocbooc-1">HIER</a>.
                    </li>
            </ul>
            <ul >Persona:
                <li>Young people who want to organize themed movie nights with snacks from a movie.</li>
                <li>Moms who want to prepare interesting food for the kids.</li>
                <li>Food bloggers who want to get inspired and reproduce the food in the books/movies.</li>
            </ul>
            <ul >Goal:
                <li>A website where user can search recipes from a certain book/movie or just get inspired by looking around.
                    The users can also upload their own recipes after a quick registeration.</li>
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


