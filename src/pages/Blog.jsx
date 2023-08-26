import React from 'react';
import NavLink from '../component/NavLink';
import Certificate from "../assets/certificate.jpg";
import Form from '../component/Form';

const Blog = () => {
  const onSubmitHandler =(e) =>{
    e.preventDefault();
  }

  return (
    <>
      <NavLink title ="Our Certificate & Online Programs For 2022"/>

      <section className='blog'>
        <div className='cont text-cen'>
          <div className='row'>
            <div className='blog-left'>
              <img src={Certificate} alt='certificate'/>
              <h2>Our Certificate & Online Programs For 2022</h2>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                  s nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.</p>
                <br/>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                  s nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.</p>
                <br/>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                  s nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.</p>

                <div className='comment'>
                  <h3>Leave a comment</h3>
                  <Form buttenText="Post Comment" 
                  onSubmitHandler={onSubmitHandler} 
                  input1="Enter Name" 
                  input2="Enter Email" 
                  text="Your Comment"
                  />
                </div>
            </div>

            <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>27</span>
            </div>

            <div>
              <span>Business Analytics</span>
              <span>29</span>
            </div>

            <div>
              <span>Business Analytics</span>
              <span>30</span>
            </div>

            <div>
              <span>Business Analytics</span>
              <span>45</span>
            </div>

            <div>
              <span>Business Analytics</span>
              <span>60</span>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog