import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavbarLight_Theme/navbar'
import Footer from '../components/Footer/footer'
import About1 from '../images/About-1.jpeg'
import About2 from '../images/About-2.jpeg'
import About3 from '../images/About-3.jpeg'
import About4 from '../images/About-4.jpeg'
import BImage from '../images/B-image.png'
import person1 from '../images/Person-1.jpeg'
import ProgressBar from '../components/progressBar'
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
            <div className="read-more">
            <Link to='/' className='btn'>Read More</Link>    
            </div> 
            </p>
        </div>
        <div className="ctn">
            <div className="ctn-1">
                <p>People</p>
                <h1>254+</h1>
                <p>Adipiscing elit, sed do eiusm</p>
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
                {/* <span>80%</span> */}
                <ProgressBar value={80} />
                <h6>Projects Completed Successfully</h6>
                {/* <span>90%</span> */}
                <ProgressBar value={90} />
            </div>
        </div>

        <div className="about-content--3">
            <div className="about-content-text">
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

        <div className="about-content--4">
            <img src={About4} alt="" />
            <div className="about-content--4-text">
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

        <div className="testimonials">
            <h5>TESTIMONIALS</h5>
            <h2>What Our Clients Say</h2>
            <img src={person1} alt="" />
            <p>
            A Marketing strategy refers to a business’s overall game plan for reaching
            prospective consumers and turning them into customers of their products
            or services
            </p>
            <h3>Carolyn Stewart</h3>
            <p>United States</p>
        </div>
        <Footer />
    </div>
  )
}

export default About