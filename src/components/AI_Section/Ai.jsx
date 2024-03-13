import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import './Ai.css'

const Ai = () => {
  return (
    <section className="section--4">
        <h3>Ai Services</h3>
        <h5>From GHC 500 per pack</h5>
        <p>Save GHC 45 on purchase</p>
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

export default Ai