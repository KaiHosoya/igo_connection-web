import React from "react";
import "./Header.css"

const Header = (props) => {
  return (
    <div className="header">
      <span className="name">{props.title}</span>
    </div>
  )
}

export default Header;