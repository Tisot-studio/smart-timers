import { Children } from "react";
import "./button.css";

export default function Button({onClick, additionClasses, children}) {
  return (
    <button className={`btn ${additionClasses}`}
            onClick={onClick ? onClick: null}
            >
      {children}
    </button>
  )
}
