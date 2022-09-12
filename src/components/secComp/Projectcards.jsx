import React from "react"
import "./Projectcards.css"
import MediaCard from "../effectComp/MediaCard"

const Projectcards = ()=>{

return(
    <> <div className="header">
    projects
   </div>
    <div className="contain">
   
     <div className="cards">
    <ul>
        <li><MediaCard
        imglink="https://bloggingrepublic.com/wp-content/uploads/2020/06/resume-maker-9.png"
        title="Resume Creator"
        description="A hassle-free way to create your resume"
        weblink="llpl"
        /></li>
        <li><MediaCard
        imglink="http://www.hdwallpaperspulse.com/wp-content/uploads/2020/08/amazing-Best-Success-Quotes.jpg"
        title="Quotes"
        description="Get quotes that inspires you"
        /></li>
        <li><MediaCard
        imglink="https://wallsdesk.com/wp-content/uploads/2017/01/Dog-full-HD.jpg"
        title="Dogopedia"
        description="Know about your pet!!"
        
        /></li>

    </ul>
    </div>
</div>
</>
)

}

export default Projectcards