import React from 'react';


const Nav = () => {
    return (
        <header className="flex-row">
            <h2>
                <a className="home-name" href="/">
                    Nick Garza
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
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
