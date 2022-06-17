import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
function Foot() {
    
    
    return (
        <footer>
          <a href="www.github.com/thenickgarza">
          <FaGithubSquare size={30} color="white"/>
          </a>
          <a>
          <FaLinkedin size={30} color="white"/>
          </a>
            
        </footer>
    ) 
}

export default Foot;