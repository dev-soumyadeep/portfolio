import "./Nav.css"
import React from 'react'
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const Navbar=()=>{
return(

<div>

  <nav>
    <ul>
            <li><HashLink to="#projects" smooth>projects</HashLink></li>
            {/* <li><a href="#blogs">Blogs</a></li> */}
            <li><a href="#contactme">Contact Me</a></li>
            <li><a href="#aboutme">About Me</a></li>

    </ul>




    </nav>
    </div>
    
);

}

export default Navbar
