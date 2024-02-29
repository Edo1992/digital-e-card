import React from 'react';
import me from '../assets/Edwin.jpg';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


function Info() {
  return (
    <div className="info">
      
         <img src={me} alt="my photo" />
      
       
        <h1>Edwin Hakobyan</h1>
        <h3>Aspiring Frontend Developer</h3>
        <h5>EdwinHakobyan.Website</h5>

       <form>
          <button className="email"><MdEmail />
Email</button>
          <button className="linkedin"><FaLinkedin/> Linkedin</button>
       </form>
        
    </div>
  )
}

export default Info;