"use client";

import "./page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSun } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

import NavBar from '@/app/components/NavBar/NavBar';
import StartMenu from "./containers/StartMenu/StartMenu";
import Pomodoro from "./containers/Pomodoro/Pomodoro";


export default function Home() {

  const [currentScreen, setCurrentScreen] = useState("startMenu");

  const screenTitles = {
    startMenu: "Helpers Timers",
    pomodoro: "Pomodoro Timer"
  };

  return (
    <main className="container">
        <NavBar> 
            <FontAwesomeIcon className="icon" icon={faHouse} onClick={() => setCurrentScreen("startMenu")} />
            <p>{screenTitles[currentScreen]}</p>
            <FontAwesomeIcon className="icon" icon={faSun} />
        </NavBar>
        {currentScreen === "startMenu" && <StartMenu onSetMenu={setCurrentScreen}/>}
        {currentScreen === "pomodoro" && <Pomodoro />}
    </main>
  )
}
