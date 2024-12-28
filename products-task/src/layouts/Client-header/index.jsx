import React from 'react'
import { NavLink } from "react-router-dom"
import "../Client-header/index.css"
const ClientHeader = () => {
  return (
    <>
    <nav>
        <h1>My Project</h1>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/Contact"}>Contact</NavLink></li>
            <li><NavLink to={"/Products"}>Products</NavLink></li>
            <li><NavLink to={"/Favorites"}>Favorites <sup>0</sup></NavLink></li>

        </ul>
    </nav>
    </>
  )
}

export default ClientHeader
