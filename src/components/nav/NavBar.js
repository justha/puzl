import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/puzzles">Puzzles</Link>
            </li>
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/relationships">Workspaces</Link>
            </li>
            
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/spaces">Space</Link>
            </li> */}
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/logout">Logout</Link>
            </li>

        </ul>
    )
}
    