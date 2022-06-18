import React from 'react';
import { FaHome } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'


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
                    <Button variant="outline-secondary" className="nav-text" href="/about">About Me</Button>
                </li>
                <li className="mx-2">
                    <a className="nav-text" href="/mywork">My Work</a>
                </li>
                <li className="mx-2">
                    <a className="nav-text" href="/contactme">Contact Me</a>
                </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;