import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '../hooks/useMediaQuery';

const NavLink = ({title}) => {
    const [menutoggled , setMenuToggle] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");

    return (
        <section className='sub-header'>
            <nav>
                <Link to="/">
                    <img src={Logo} alt='logo' />
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
            <h2 className="h1">{title}</h2>
        </section>
    )
}

export default NavLink;