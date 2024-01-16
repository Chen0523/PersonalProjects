import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./components.css";
import ArtodoB from "../img/artodoB.gif";
import ArtodoW from "../img/artodoW.gif";
import Robot from "../img/robot.gif";
import Burnt from "../img/firstaidBurnt.gif";
import Route from "../img/route.gif";
import Fell from "../img/firstAidFell.gif";
import Dice from "../img/dice2.png";
import FingerMonkey from "../img/fingerMonkey.gif"
const JustForFun = () => {

    return (
        <div className="main_container">
            <div className="item">
                <div className="img">
                    <img src={Dice} alt=" Characters"></img>
                </div>
                <div className="des">
                    <div className="br">Lord of Coffee</div>
                    <ul>Goal:
                        <li>A rapid but fun team game to decide who will make coffee/do the chores.</li>
                    </ul>
                    <ul>Game Mechanism:
                        <li> Every player get two dices and choose a role. Every player plays three turns against each other.</li>
                        <li> In each turn, two players throw their two dices at the same time.</li>
                        <li> If the player has one dice that has points greater than three,
                        he/she can decide whether he/she wants to apply their role's ability to the other dice or one of his enemy's dice.</li>
                        <li> The one with greater points wins the turn.</li>

                    </ul>
                    <ul>
                        Roles (Example):
                        <li> Witch - Bewitch the enemy by making one of the enemy's dice roll in a random direction.</li>
                        <li> Thief - Stoles one point from the enemy if the enemy activates his ability.</li>
                        <li> Fighter - Adds one point to one of his dices. </li>
                        <li> Dreamer - Make the dream come true - choose one dice to be as big as the other one. </li>
                        <li> Judge - Judges that the enemy can only activate his ability when he has one dice with more than four points. </li>
                        <li> ...</li>
                    </ul>
                    <ul>
                        Technology used:
                        <li>Game Design, Character Design, Adobe Illustrator</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="img">
                    <img src={FingerMonkey} alt=" Finger Monkey"></img>
                </div>
                <div className="des">
                    <div className="br">Finger Monkey</div>
                    <ul>Description:
                        <li>A mini but sweet bus game.</li>
                    </ul>
                    <ul>Game Mechanism:
                        <li> Tired of pre-designed game levels? Use the city as your playground! </li>
                        <li> When you sit on the bus, take out your phone, select one object in your camera as the obstacle you should avoid.</li>
                        <li> Trees, street lights, people wearing a hat...You design your own level! </li>
                        <li> What about the speed? You ask? Ops sorry! Your bus driver has it under control!</li>
                    </ul>
                    <ul>
                        Technology used:
                        <li>Game Design, Photoshop</li>
                        <li>(This prototype is going to be implemented in Unity AR Foundation.)</li>
                    </ul>
                </div>
            </div>

            <div className="item">
                <div className="double_img_V">
                    <img src={Burnt} alt=" Process for helping others"></img>
                    <img src={Fell} alt=" Process for self help"></img>
                </div>
                <div className="des">
                    <div className="br">FirstAid for Self-help</div>
                    <ul>Goal:
                        <li>On this web, simply by specifying the emergency situation and marking the symptoms visually,
                            users can find the correct first aid treatment before
                            they could get professional help.</li>
                    </ul>
                    <ul>Functions:
                        <li> The web will adjust suggestions based on the emergency situation and whether the user want
                            to self help (shown in the right illustration)
                            or to help others (shown in the left illustration).</li>
                        <li> Users can mark the hurt area freely on the human body illustration and document the
                            symptoms.
                        </li>
                        <li> Users will get advice (in video/voice/text form) on what to do before the professional
                            help arrives.
                        </li>
                    </ul>
                    <ul>
                        Technology used:
                        <li>Adobe XD, Adobe Illustrator</li>
                    </ul>
                </div>


            </div>
            <div className="item">
                <div className="double_img_V">
                    <img src={ArtodoB} alt=" Dark version"></img>
                    <img src={ArtodoW} alt=" Bright Verstion"></img>
                </div>
                <div className="des">
                    <div className="br">ArTodo List</div>
                    <ul>Goal:
                        <li>The app should motivate users to accomplish the tasks to color the illustration in the
                            background.</li>
                    </ul>
                    <ul>Functions:
                        <li> The app will provide a new uncolored illustration every day.</li>
                        <li> Users can finish their Todo tasks to color the illustration in the background, and share the
                            accomplishment to social media afterward.
                        </li>
                        <li> Users can combine their own color set or choose from the given color templates</li>
                    </ul>
                    <ul>
                        Technology used:
                        <li>Adobe XD, Adobe Illustrator</li>
                    </ul>


                </div>
            </div>
            <div className="item">
                <div className="img bomb">
                    <img src={Robot} alt=" bomberman"></img>
                </div>
                <div className="des">
                    <div className="br">Bomberman Robot</div>

                    <ul>Semester Project:
                        <li>The course <a style={{color: "#4F4847", fontWeight: "bold"}} target="_blank"
                                    href="https://hci.iwr.uni-heidelberg.de/teaching/fundamentals_machine_learning_2017">Fundamentals of Machine Learning</a> provides
                            an API for the game Bomberman, with which students shall train a robot who could learn to play the Bomberman game without hardcoded rules.
                        The technology applied for the training shall be chosen among current reinforcement learning technologies.</li>
                    </ul>

                    <ul>Technology used:
                        <li> Deep Learning, Deep Q Learning, Reinforcement Learning, Pytorch, Feature extraction</li>
                    </ul>
                </div>

            </div>
            <div className="item">
                <div className="img route">
                    <img src={Route} alt=" route planner"></img>
                </div>
                <div className="des">
                    <div className="br">Intelligent Route Planner</div>

                    <ul>Idea for <a style={{color: "#4F4847", fontWeight: "bold"}} target="_blank"
                                    href="https://home.kpmg/ch/de/home/karriere/ideation-challenge.html">KPMG Ideation
                        Challenge 2019</a>

                        <li> Intelligent AI route planner shall plan the route according to the user's condition
                            (whether the user is wearing high heal shoes or has the need to keep
                            the look tidy) and subjective constrains such as the current weather to plan the route
                            dynamically to the last meter.
                        </li>
                    </ul>
                    <ul>The full video can be found <a style={{color: "#4F4847", fontWeight: "bold"}} target="_blank"
                                    href="https://drive.google.com/file/d/1roksu2WQXtkXhaZXdFphUptcgVj5aCyr/view?usp=sharing">HIER</a>:
                        <li>To protect privacy, the team introduction part is cut out.</li>
                    </ul>
                    <ul>Technology used:
                        <li> Krita (Animation Design), Brainstorming, Idea Generation, Team work </li>
                    </ul>


                </div>

            </div>
        </div>
    );
};
export default JustForFun;


