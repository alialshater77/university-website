import React from 'react'
import NavLink from '../component/NavLink'
import Form from "../component/Form";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const onSubmitHandler =(e) =>{
    e.preventDefault();
  }

  return (
    <>
      <NavLink title="Contact Us"/>
      <section className="location">
        <div className="cont text-cen">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11291.541093721897!2d36.56891002419636!3d32.71275387669847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1646844802786!5m2!1sar!2s" width="600" height="450" allowFullScreen={true} style={{border:0}}  loading="lazy"></iframe>
        </div>
      </section>

      <div className="contact-us">
        <div className="cont">
          <div className="row">
            <div className="contact-col">
              <div className='contact-icons'>
                <HomeIcon className='icons-con'/>
                <span>
                  <h5>As Suwayda,Al-Mehwarey</h5>
                  <p className="p">Location</p>
                </span>
              </div>

              <div className='contact-icons'>
                <PhoneIcon className='icons-con'/>
                <span>
                  <h5>+963 993171809</h5>
                  <p className="p">Phone number</p>
                </span>
              </div>


              <div className='contact-icons'>
                <EmailIcon className='icons-con'/>
                <span>
                  <h5>alialshater7@gmail.com</h5>
                  <p className="p">Email Address</p>
                </span>
              </div>
            </div>

          <div className="contact-col">
            <Form 
            input1="Enter Your Name" 
            input2="Enter Email Address" 
            input3="Enter Your Subject" 
            onSubmitHandler={onSubmitHandler} 
            text="Message"
            buttenText="Send Message"
            />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact