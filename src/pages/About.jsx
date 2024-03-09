import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import About1 from '../images/About-1.jpeg'
import About2 from '../images/About-2.jpeg'
import '../index.css'
import './About.css'

const About = () => {
  return (
    <div className="about">
        <div className="nav">
            <Navbar /> 
            <h1 style={{margin: '80px 0'}}>About</h1>
        </div>
        <div className="about-content">
            <img src={About1} alt="" />
            <p>
            We are formed by a team with extensive experience 
            in innovation and digital transformation.
            we work mainly in the creation of digital solution on
            new technologies in an open innovation model.
            our team of creative and technological Geeks think
            and work differently. 
            </p>
        </div>
        <Link to='/' className='btn'>Read More</Link>
        <div className="ctn">
            <div className="ctn-1">
                <p>Poeple</p>
                <h1>254+</h1>
                <p>Adipiscing elit,sed do eiusm</p>
            </div>
            <div className="ctn-2">
                <p>World Offices</p>
                <h1>12</h1>
                <p>sed do eiusmod tempor</p>
            </div>
        </div>

        <div className="about-content--2">
            <img src={About2} alt="" />
            <div className="content-text">
                <h5>WHY CHOOSE US</h5>
                <h3>
                Benefits Of Choosing 
                Our Agency
                </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever since the 1500,s when an unknown
                printer took a galley of type and scrambled it to make a type 
                specimen book.
                </p>
                <h6>Locally Recommended</h6>
                <span>80%</span>
                <h6>Projects Completed Successfully</h6>
                <span>90%</span>
            </div>
        </div>
    </div>
  )
}

export default About