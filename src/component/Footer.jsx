import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='waves'>
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            <div className='cont text-cen'>
                <h4>About Us</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit </p>

                <div className='footer-icons'>
                    <FacebookIcon className='icons'/>
                    <InstagramIcon className='icons'/>
                    <a target='_blank' href='https://github.com/alialshater77'>
                        <GitHubIcon className='icons'/>
                    </a>
                    
                </div>
                <p style={{ fontWeight:"600"}} className='p'>Made By Ali Alshater</p>
            </div>
        </section>
    )
}

export default Footer