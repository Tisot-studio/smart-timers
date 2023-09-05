import "./pomodoro.css";
import { useState } from "react";

import Button from "@/app/components/Button/Button";
import SetTaskMenu from "@/app/components/SetTaskMenu/SetTaskMenu";


export default function Pomodoro() {

    const[taskMenuIsOpen, setTaskMenuIsOpen] = useState(false);
    const[pomoTimerData, setPomoTimerData] = useState({
        focusTime: 25,
        relaxTime: 5,
        rounds: 1
    });

    const[nowIsFocus, setNowIsFocus] = useState(true);



    return (
        <section className="pomodoro">
            <div className="timer-container">
                <div className="timer-info">
                    <div className="timer-switch-buttons">
                        <button className={nowIsFocus ? null : "timer-btn-not-active"}
                                onClick={() => setNowIsFocus(true)}>Focus</button>
                        <button className={nowIsFocus ? "timer-btn-not-active" : null}
                                onClick={() => setNowIsFocus(false)}>Relax</button>
                    </div>
                    <div className="counter">
                      {nowIsFocus ? `${pomoTimerData.focusTime}:00` : `0${pomoTimerData.relaxTime}:00`}  
                    </div>
                    <Button additionClasses="pomo-btn">{"Start"}</Button>
                </div>
            </div>

            <div className="current-task">
                <p className="no-task">No current tasks</p>
            </div>

            <Button onClick={() => setTaskMenuIsOpen(true)}>Set Task</Button>
            {taskMenuIsOpen && <SetTaskMenu setTaskMenuIsOpen={setTaskMenuIsOpen}/>}
        </section>
    )
}
