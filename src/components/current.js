import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Coocbooc from "../img/coocbooc5.png";
import EmmaReyes from "../img/EmmaReyes.png";
import Aiice from "../img/AIICE.gif";
import AiicePNG from "../img/aiice.png";

const Current = () => {
  return (
    <div className="main_container">
      <div className="item">
        <div className="img">
          {" "}
          <img src={Tech} alt=" Tech tree Illustration"></img>
        </div>

        <div className="des">
          <div className="br">TechTree</div>
          <ul>
            Status:{" "}
            <li>
              {" "}
              Building Demo and iterating the idea.
              {/*Demo can be found <Link className = "linkStyle" to ={"/techTreeDemo"}> Hier -> </Link>*/}
            </li>
          </ul>
          <ul>
            Persona:
            <li>
              {" "}
              People who want to get daily fashion inspiration from their
              beloved books.
            </li>
            <li>
              {" "}
              Young professionals who want to visualize their skills as a
              tech-tree.
            </li>
          </ul>
          <ul>
            Goal:
            <li>
              A website where users can find the overview of the study routine
              for a certain skill such as web development. The routine will be
              personalized depends on the goals and constrains of the user. The
              web is also going to show the knowledge points that are covered in
              the popular online courses.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="double_img_H">
          {" "}
          <img src={AiicePNG} alt=" Tech tree Illustration"></img>
          <img src={Aiice} alt=" Tech tree Illustration"></img>
        </div>

        <div className="des">
          <div className="br">AIice in Labelland</div>
          <ul>
            Status:{" "}
            <li>
              {" "}
              In Development.
              {/*Demo can be found <Link className = "linkStyle" to ={"/techTreeDemo"}> Hier -> </Link>*/}
            </li>
          </ul>
          <ul>
            Description:
            <li>
              {" "}
              A labeling game that helps with gathering data needed for my
              master thesis "Position Optimization for Intelligent AR
              Characters".
            </li>
            <li>
              {" "}
              This is an internal web application which "Gamify" the labeling
              process to motivate my colleagues to help me with the label work.
              To collect enough data to train a DNN, players are asked to choose
              the character which stays at the position that is most comfortable
              to them.
            </li>
          </ul>
          <ul>
            Game Mechanism:
            <li>
              {" "}
              The story is inspired by "Alice in wonderland", in this game, our
              princess AIice (Character image from Unity Chan!) is trapped in
              the Labelland. The Labelland makes a fake AIice to confuse the
              player who wants to rescue her. In order to rescue the real AIice,
              the player should choose a role and throw their weapon to break
              the curse.
            </li>
            <li>
              {" "}
              Different roles will have different weapons with different sound
              effects, such as the cook will throw eyeball cupcakes.
            </li>
            <li> Players can label more to unlock new roles.</li>
            <li>
              {" "}
              A scoreboard which shows the competition between players from
              different countries will be added in the future.
            </li>
          </ul>

          <ul>
            {" "}
            Remark:
            <li>
              {" "}
              The monster characters used in this labeling game are based on the
              images from Pinterest and processed in Adobe Illustrator.
            </li>
          </ul>
        </div>
      </div>

      <div className="item">
        <div className="img">
          <img src={Coocbooc} alt=" Book with Daly Eggs Illustration"></img>
        </div>
        <div className="des">
          <div className="br">COOCBOOC</div>
          <ul>
            Status
            <li>
              {" "}
              Currently closed. (Online from Aug 2020 - Jan 2021.) More Infos
              can be found{" "}
              <a
                style={{ color: "#4F4847", fontWeight: "bold" }}
                target="_blank"
                href="https://www.producthunt.com/posts/coocbooc-1"
              >
                HIER
              </a>
              .
            </li>
          </ul>
          <ul>
            Persona:
            <li>
              Young people who want to organize themed movie nights with snacks
              from a movie.
            </li>
            <li>Moms who want to prepare interesting food for the kids.</li>
            <li>
              Food bloggers who want to get inspired and reproduce the food in
              the books/movies.
            </li>
          </ul>
          <ul>
            Goal:
            <li>
              A website where users can search recipes from a certain book/movie
              or just get inspired by looking around. Users can also upload
              their own recipes after a quick registration.
            </li>
          </ul>
          <ul>
            Personal Goal:
            <li> To learn the skills of full-stack web-development.</li>
          </ul>
          <ul>
            Skills used:
            <li>
              {" "}
              Design thinking, Idea Iteration, Go To Market Planning, Graphic
              Design, React, React Hooks, CSS, AWS Cloud, AWS Amplify, GraphQL,
              Facebook federated login, Adobe Illustrator,
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Current;
