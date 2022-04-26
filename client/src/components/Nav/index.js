import React from 'react';


const Nav = () => {
    return (
        <header>
            <h1>
                <a href="/">
                    Nick Garza
                </a>
            </h1>
            <nav>
                <ul>
                <li className="mx-2">
                    <a href="/AboutMe">About Me</a>
                </li>
                <li className="mx-2">
                    <a href="/MyWork">My Work</a>
                </li>
                <li className="mx-2">
                    <a href="/ContactMe">Contact Me</a>
                </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;
