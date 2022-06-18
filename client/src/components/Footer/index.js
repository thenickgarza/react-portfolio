import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
function Foot() {
    
    
    return (
        <footer>
            <div className="side-bar-icons">
          <a href="#www.github.com/thenickgarza">
          <FaGithubSquare size={30} color="white"/>
          </a>
          <a>
          <FaLinkedin size={30} color="white"/>
          </a>
            </div>
        </footer>
    ) 
}

export default Foot;