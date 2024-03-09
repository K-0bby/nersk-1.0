import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import './Services.css'

const Services = () => {
  return (
    <section className="section--2">
        <h3>Design Services</h3>
        <h5>From GHC 2500 per pack</h5>
        <p>Save GHC 345 on purchase</p>
        <div className="bottom">
          <div className="buttons">
          <Link to='/' className='btn-1'>Order Now</Link>
          <Link to='/' className='btn-2'>Try Free Version</Link>
          </div>
          <p>Order any of our Agric Products  and service for a better performance of your 
          farmland and farm produce.</p>
        </div>
    </section>
  )
}

export default Services