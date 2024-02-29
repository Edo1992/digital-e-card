import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="social-media">
        <ul>
           <li><FaTwitter className="icon"/></li>
           <li><FaFacebook className="icon" /></li>
           <li> <FaInstagramSquare className="icon" /></li>
           <li> <FaGithub  className="icon"/></li>
        </ul>
    </div>
  )
}

export default Footer