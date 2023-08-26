import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import London from "../assets/london.png";
import Newyork from "../assets/newyork.png";
import Washington from "../assets/washington.png";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import OurCourses from '../component/OurCourses';
import Facilities from '../component/Facilities';
import useMediaQuery from '../hooks/useMediaQuery';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Home = () => {
    const [menutoggled , setMenuToggle] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");

    return (
        <>
        <section className='header'>
                <nav>
                    <Link to="/">
                        <img src={Logo} alt='logo'/>
                    </Link>
                    <div className='nav-links'>
                        {isAboveMediumScreens ? (
                            <ul className="unstile">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/courses">Courses</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        ) : (
                            <button onClick={() => setMenuToggle(!menutoggled)}>
                                <MenuIcon className='mobile-menu-icons'/>
                            </button>
                        )}  
                    </div>
                    {!isAboveMediumScreens && menutoggled && (
                        <div className='mobile-view'>
                            <div className='close-icon'>
                                <button onClick={() => setMenuToggle(!menutoggled)}>
                                    <CloseIcon className='mobile-menu-icons'/>
                                </button>
                            </div>

                            <div className='mobile-menu-items'>
                                <Link className='text-dec' to="/">Home</Link>
                                <Link className='text-dec' to="/about">About</Link>
                                <Link className='text-dec' to="/courses">Courses</Link>
                                <Link className='text-dec' to="/blog">Blog</Link>
                                <Link className='text-dec' to="/contact">Contact</Link>
                            </div>
                        </div>
                    )}
                </nav>

                <div className='text-box text-cen'>
                    <h1>World's Biggest University</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/>
                        tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a className="text-dec  wave-btn " href="">
                    <span style={{fontSize:"16px" , fontWeight:"600"}}>Visit Us To Know More</span>
                    <div className="liquid"></div>
                    </a>
                </div>
            </section>
            <OurCourses/>
            <section className='campus'>
                <div className='cont text-cen'>
                    <h2 className="h1">Our Global Campus</h2>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    <div className='row'>
                    <div className="campus-col">
                        <img src={London} alt="london"/>
                        <div className="layar">
                            <h3>LONDON</h3>
                        </div>
                    </div>

                    <div className="campus-col">
                        <img src={Newyork} alt="newyork"/>
                        <div className="layar">
                            <h3>NEW YOURK</h3>
                        </div>
                    </div>

                    <div className="campus-col">
                        <img src={Washington} alt="washington"/>
                        <div className="layar">
                        <h3>WASHINGTON</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Facilities/>
            <section className='Testimonials'>
                <div className='cont text-cen'>
                    <h2 className='h1'>What Our Students Says</h2>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    <div className='row'>
                        <div className='Testimonials-col'>
                            <img src={User1} alt='user1'/>
                            <div>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                Ut enim ad minim veniam, quis nostrud exercitation sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h3>Christine Berkley</h3>
                                <div className='star-icons'>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarHalfIcon className='icons'/>
                                </div>
                            </div>
                        </div>

                        <div className='Testimonials-col'>
                            <img src={User2} alt='user2'/>
                            <div>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                Ut enim ad minim veniam, quis nostrud exercitation sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h3>David Byer</h3>
                                <div className='star-icons'>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                    <StarIcon className='icons'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='cta'>
                <div className='cont text-cen'>
                    <h2 className="h1">Enroll For Our Various Online Courses<br/> Anywhare From The World!</h2>
                    <Link className="text-dec wave-btn" to="/contact">
                        <span style={{ fontSize:"17px" , fontWeight:"600"}}>Contact Us </span>
                        <div className="liquid"></div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home