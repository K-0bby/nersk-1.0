import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import Frame from '../images/Frame 82.jpg'
import card1 from '../images/Rectangle 65.png'
import card2 from '../images/Rectangle 66.png'
import card3 from '../images/Rectangle 67.png'
import './SoftwareServices.css'

const SoftwareService = () => {
  return (
    <div className='SoftwareServicePage'>
        <Navbar style={{color: '#000'}}/>
        <div className="contentPage">
          <h1 className='title'>Software Development Services</h1>
          <img src={Frame} alt="" />
          <div className="btn">
          <Link to='/SoftwareServices' className='btn-1'>Order Now</Link>
          <Link to='/' className='btn-2'>Try Free Version</Link>
          </div>
          <p>
          Order any of our Agric Products  and service for a better performance of your 
          farmland and farm produce.
          </p>
          <div className="article">
            <p>
            A marketing strategy refers to a business ‘s overall game
            plan for for reaching prospective consumers and turning
            them into customers of their products or services.    A marketing strategy refers to a business ‘s overall game
            plan for for reaching prospective consumers and turning
            them into customers of their products or services.    A marketing strategy refers to a business ‘s overall game
            </p>
            <p>
            A marketing strategy refers to a business ‘s overall game
            plan for for reaching prospective consumers and turning
            them into customers of their products or services.    A marketing strategy refers to a business ‘s overall game
            plan for for reaching prospective consumers and turning
              them into customers of their products or services.    A marketing strategy refers to a business ‘s overall game
            </p>
          </div>
          <h2>Build Your Business Software</h2>
          <div className="cards">
            <div className="card">
              <img src={card1} alt="" />
              <h4>We're loyal</h4>
              <p>‘’We’re trying to see how leadership 
                behaviors affect employee motivation,
                and if the same behaviors in different.</p>
            </div>

            <div className="card">
              <img src={card2} alt="" />
              <h4>We're Helpful</h4>
              <p>We’re fanatices about initiative and
                constructive impact our team
              members are consistently rewarded..</p>
            </div>

            <div className="card">
              <img src={card3} alt="" />
              <h4>We're Flexible</h4>
              <p>Employers that after options as
              telecommuting or  flexible work
              schedules can help employees have.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SoftwareService