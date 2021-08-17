import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import ArtodoB from "../img/artodoB.gif";
import ArtodoW from "../img/artodoW.gif";
import Robot from "../img/robot.gif";

const JustForFun = () => {

  return (
    <div className="current_container">
        <div className = "artodoimg">
                    <img src={ArtodoB} alt=" Book with Daly Eggs Illustration"></img>
                    <img src={ArtodoW} alt=" Book with Daly Eggs Illustration"></img>
</div>
        <div className ="des">
            <div className = "br">ArTodo List</div>
            <ul>Functions:
                <li> The user finish the tasks to color a new illustration daily in the background</li>
                <li> The user may combine their own color set or choose from the given color templates</li>
            </ul>
            <ul>
                Technology used:
                <li>Adobe XD, Adobe Illustrator</li>
            </ul>


        </div>

        <div className ="des">
            <div className = "br">Bomberman Robot</div>

            <ul >Uni Project:
                <li>With the given Bomberman API, students can freely choose a technology to train a robot who could learn to play
                    the Bomberman game without hardcoded rules.</li>
            </ul>

            <ul>Technology used:
            <li> Deep Learning, Deep Q Learning, Reinforce Learning, Pytorch, Feature extraction</li>
            </ul>
        </div>
        <div className = "img bomb">
            <img src={Robot} alt=" Book with Daly Eggs Illustration"></img>
        </div>
    </div>
  );
};
export default JustForFun;


