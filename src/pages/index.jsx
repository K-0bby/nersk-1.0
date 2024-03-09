import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';
import './home.css'

const index = () => {
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
            <Link to="/">Talk To Us</Link>
        </div>
    </section>
    
  )
}

export default index