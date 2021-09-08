import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import ArtodoB from "../img/artodoB.gif";
import ArtodoW from "../img/artodoW.gif";
import Robot from "../img/robot.gif";
import Burnt from "../img/firstaidBurnt.gif";
import Fell from "../img/firstAidFell.gif";

const JustForFun = () => {

  return (
    <div className="current_container">

        <div className ="des">
            <div className = "br">FirstAid for Self-help</div>
            <ul>Goal:
                <li>Simply by specifying the emergency situation and marking the symptoms visually on this web, users can find the correct first aid treatment before
                they could get professional help.</li>
            </ul>
            <ul>Functions:
                <li> The web will adjust suggestions based on the emergency situation and whether the user want to self help or to help others.</li>
                <li> The user can mark the hurt area freely on the human body illustration and document the symptoms.</li>
                <li> The user will get advices (in video/voice/text form) for what to do before the professional help arrives.</li>
            </ul>
            <ul>
                Technology used:
                <li>Adobe XD, Adobe Illustrator</li>
            </ul>


        </div>
        <div className = "artodoimg">
                    <img src={Burnt} alt=" Book with Daly Eggs Illustration"></img>
                    <img src={Fell} alt=" Book with Daly Eggs Illustration"></img>
        </div>
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


