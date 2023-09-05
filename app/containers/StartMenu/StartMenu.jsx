import "./start-menu.css";

import Button from '@/app/components/Button/Button';

export default function StartMenu({onSetMenu}) {
  return (
    <section className="home-screen">
        <h1>What are you going to do?</h1>
        <div className="buttons-container">
        <Button onClick={() => onSetMenu("pomodoro")} > Deep Work </Button>
        <Button onSetMenu={onSetMenu}> Workout </Button>
        <Button onSetMenu={onSetMenu}> Housework </Button>
        </div>
    </section>
  )
}
