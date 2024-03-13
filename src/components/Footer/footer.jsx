import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import './footer.css'

const footer = () => {
  return (
    <div className="footer-container">
    <div className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <div className="logo-title">NERSK LLC</div>
                <div className="logo-subtitle">INFORMATION TECH AGENCY</div>   
                <div className="footer-contact-list">
                    <ul>
                        <li>497 Evergreen Rd. Roseville, CA 95673</li>
                        <li>+44 345 678 903</li>
                        <li>@_nersk@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-links">
            <ul className="footer-list">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Terms & Conditions</Link></li>
            </ul>
        </div>
        <div className="footer-socials">
            <ul className="footer-socials-list">
            <li>
                <Link to="/">
                    <FacebookIcon /> Facebook
                </Link>
            </li>
            <li>
                <Link to="/">
                    <InstagramIcon /> Instagram
                </Link>
            </li>
            <li>
                <Link to="/">
                    <TwitterIcon /> Twitter
                </Link>
            </li>
            </ul>
        </div>
        <div className="footer-form">
            <p className="footer-text">Subscribe to our newsletter</p>
            <div className="form">
                <input type="text" id="email" name="email" placeholder="Email Address" />
                <button type="submit">OK</button>
            </div>
            <p className="footer-marker" style={{textAlign:'center'}}>
                Copyright &copy; 2024 by Gideon. All Rights Reserved
            </p>
        </div>
    </div> 
</div>

  )
}

export default footer