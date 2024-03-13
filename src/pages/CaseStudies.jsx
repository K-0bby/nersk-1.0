import React from 'react'
import Navbar from '../components/NavbarLight_Theme/navbar'
import Footer from '../components/Footer/footer'
import { Link } from 'react-router-dom'
import About3 from '../images/About-3.jpeg'
import About4 from '../images/About-4.jpeg'
import BImage from '../images/B-image.png'
import '../index.css'
import './CaseStudies.css'

const CaseStudies = () => {
  return (
    <div className="CaseStudies">
      <div className="nav">
            <Navbar /> 
            <h1 style={{margin: '80px 0'}}>Case Studies</h1>
        </div>
        <div className="CaseStudies--1">
            <div className="CaseStudies-text">
                <h5>ABOUT OUR COMPANY</h5>
                <h3>Your Success Is Our Mission</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typestting
                industry. Lorem Ipsum has been the industry’s standard dummy text
                ever since the 15000s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.
                </p>
                <Link to='/' className='btn'>Read More</Link>
            </div>
            <img src={About3} alt="" />
        </div>

        <div className="CaseStudies--2">
            <img src={About4} alt="" />
            <div className="CaseStudies-2-text">
                <img src={BImage} alt="" />
                <h4>Management</h4>
                <p>
                Business & Management is one of  the most popular fields
                of study, teaching you everything there is to know about
                running a successful business.
                </p>
                <Link to='/' className='btn'>Read More</Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CaseStudies