import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './SocialLinks.css'

const SocialLinks = () => {
    return (
    <div className="social-links">
    <a href='https://github.com/cvmug'>
        <FaGithub />
    </a>
    <a href='https://linkedin.com/in/catherine-mugnai'>
        <FaLinkedin />
    </a>
    </div>
    )
}

export default SocialLinks