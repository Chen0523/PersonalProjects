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
    <div className="main_container">
        <div className="item">
        <div className = "double_img">
            <img src={Burnt} alt=" Process for helping others"></img>
            <img src={Fell} alt=" Process for self help"></img>
        </div>
        <div className ="des">
            <div className = "br">FirstAid for Self-help</div>
            <ul>Goal:
                <li>On this web, simply by specifying the emergency situation and marking the symptoms visually, users can find the correct first aid treatment before
                they could get professional help.</li>
            </ul>
            <ul>Functions:
                <li> The web will adjust suggestions based on the emergency situation and whether the user want to self help (shown in the right illustration)
                    or to help others (shown in the left illustration).</li>
                <li> Users can mark the hurt area freely on the human body illustration and document the symptoms.</li>
                <li> Users will get advices (in video/voice/text form) for what to do before the professional help arrives.</li>
            </ul>
            <ul>
                Technology used:
                <li>Adobe XD, Adobe Illustrator</li>
            </ul>
        </div>


        </div>
<div className = "item">
        <div className = "double_img">
            <img src={ArtodoB} alt=" Dark version"></img>
            <img src={ArtodoW} alt=" Bright Verstion"></img>
        </div>
        <div className ="des">
            <div className = "br">ArTodo List</div>
            <ul>Goal:
                <li>The app should motivate users to accomplish the tasks to color the illustration in the background.</li>
            </ul>
            <ul>Functions:
                <li> The app will provide a new uncolored illustration everyday.</li>
                <li> Users can finish the tasks to color the illustration in the background, and share the accomplishment to social media afterwards.</li>
                <li> Users can combine their own color set or choose from the given color templates</li>
            </ul>
            <ul>
                Technology used:
                <li>Adobe XD, Adobe Illustrator</li>
            </ul>


        </div>
</div>
        <div className="item">
        <div className = "img bomb">
            <img src={Robot} alt=" bomberman"></img>
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

        </div>
    </div>
  );
};
export default JustForFun;


