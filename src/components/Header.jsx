import React from "react";
import weekdayLogo from "../assets/weekdayLogo.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">
            <img src={weekdayLogo} alt="" height={30} />
          </a>
        </h2>
        <p>Username</p>
      </div>
    </header>
  );
}
