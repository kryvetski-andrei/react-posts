import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <Link className="nav-bar__link" to = "/about">О приложении</Link>
          </li>
          <li className="nav-bar__item">
            <Link className="nav-bar__link" to = "/posts">Посты</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar