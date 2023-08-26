import React from 'react'
import NavLink from '../component/NavLink'
import { Link } from 'react-router-dom';
import AboutImg from "../assets/about.jpg";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div>
      <NavLink title="About Us"/>

      <section className='about-us'>
        <div className='cont text-cen'>
          <div className='row'>
            <div className='about-col'>
              <h2 className="h1">We Are The World's Largest University</h2>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className="text-dec wave-btn" to="/courses">
                <span>Explore Now</span>
                <div className="liquid"></div>
              </Link>
            </div>

            <div className="about-col">
              <img src={AboutImg} alt="about"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;