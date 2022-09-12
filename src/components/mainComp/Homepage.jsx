import "./Homepage.css"
import React from 'react'
import Scrolldiv from "../secComp/Scrolldiv.jsx";
import Projectcards from "../secComp/Projectcards";
import Contactme from "../secComp/Contactme";
import Aboutme from "../secComp/Aboutme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FadeInSection from './FadeInSection';
const Homepage = ()=>{
  
    return(
        <>
      
    <section id="intro">
    <br /><br /><br /><br /><br />
    <Scrolldiv/>
  
    <ul className='icon-box'>
            <li>
            <a href='https://www.linkedin.com/in/soumyadeep-roy-9b335a221'
               rel='noopener noreferrer'
               target="_blank"
            >
            <LinkedInIcon  fontSize='inherit' htmlColor=' rgb(81, 164, 236)'/></a> 
            </li> 
            <li>
            <a href='https://twitter.com/Soumyadeep98741'
               rel='noopener noreferrer'
               target="_blank"
            >
            <TwitterIcon  fontSize='inherit' htmlColor=' rgb(81, 164, 236)'/></a> 
            </li>
          
          </ul>
   
    </section>
    <section id="projects">
    <Projectcards/>
    </section>
    <section id="contactme">
    <br /><br /><br /><br /><br />
   <Contactme></Contactme>
    </section>
    <section id="aboutme">
  <Aboutme></Aboutme>
    </section>
   
        </>
    );

}

export default Homepage


