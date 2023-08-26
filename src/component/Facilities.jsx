import React from 'react';
import Library from "../assets/library.png";
import Basketball from "../assets/basketball.png";
import Cafiteria from "../assets/cafeteria.png";

const Facilities = () => {
    return (
        <section className='Facilities'>
            <div className='cont text-cen'>
                <h2 className='h1'>Our Facilities</h2>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className='row'>
                <div className="facilities-col">
                    <img src={Library} alt="library"/>
                    <h3>World Class Library</h3>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="facilities-col">
                    <img src={Basketball} alt="basketball"/>
                    <h3>Largest Play Ground</h3>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="facilities-col">
                    <img src={Cafiteria} alt="cafiteria"/>
                    <h3>Tasty And Healthy Food</h3>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Facilities;