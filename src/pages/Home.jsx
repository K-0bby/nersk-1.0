import React from 'react'
import Navbar from '../components/NavbarLight_Theme/navbar'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import '../index.css'
import './home.css'

const Home = () => {
  return (
    <section className="home">
        <Navbar /> 
        <div className="content">
            <h6><span>WELCOME TO NERSK</span></h6>
            <h2>The future of technology is by the <span>Nersk Group.</span></h2>
            <p>
            We help you get started with your technological endevours  to make 
            the future of technolgogy the best we can actually 
            get on the markerts
            </p>
            <Link to="/" className='home-btn'>Talk To Us</Link>
        </div>
              <ul className="socials-list">
                <li>
                    <Link to="/">
                        <FacebookIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <InstagramIcon /> 
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <TwitterIcon />
                    </Link>
                </li>
              </ul>
    </section>
    
  )
}

export default Home