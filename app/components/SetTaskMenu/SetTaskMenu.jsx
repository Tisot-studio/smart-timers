import { faL } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./set-task-menu.css";

export default function SetTaskMenu({setTaskMenuIsOpen}) {
  return (
    <div className="set-task-menu-bg">
        <div className="set-task-menu-modal">
            <div className="task-title task-menu-item">
                <input type="text" name="name" placeholder="What is your current task?" maxLength="100"/>
            </div>
            <div className="focus-time task-menu-item">
                <p>Focus time (min):</p>
                <select>
                    <option value="25">25</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div className="relax-time task-menu-item">
            <p>Relax time (min):</p>
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="rounds task-menu-item">
                <p>Rounds:</p>
                <input type="number" defaultValue="1" min="1" max="10" />
            </div>
            <div className="task-menu-buttons task-menu-item">
                <Button onClick={() => setTaskMenuIsOpen(false)} additionClasses="task-menu-btn task-menu--cancel-btn">Cancel</Button>
                <Button additionClasses="task-menu-btn">OK</Button>
            </div>
        </div>
    </div>
  )
}
