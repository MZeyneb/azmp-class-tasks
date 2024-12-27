import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import "./index.css"

const Header = () => {
  return (
    <header>
        <nav>
            <h1>Site</h1>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/About"}>About</NavLink></li>
                <li><NavLink to={"/Favorites"}>Favorites</NavLink></li>

            </ul>
        </nav>
    </header>

    
  )
}

export default Header