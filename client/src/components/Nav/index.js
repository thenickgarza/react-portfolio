import React from 'react';
import { FaHome } from 'react-icons/fa'


const Nav = () => {
    return (
        <header className="flex-row">
            <h2>
                <a className="home-name" href="/">
                    <FaHome/>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a className="nav-text" href="/AboutMe">About Me</a>
                </li>
                <li className="mx-2">
                    <a className="nav-text" href="/MyWork">My Work</a>
                </li>
                <li className="mx-2">
                    <a className="nav-text" href="/ContactMe">Contact Me</a>
                </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;
