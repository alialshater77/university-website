import React from 'react';
import OurCourses from "../component/OurCourses";
import Facilities from "../component/Facilities";
import Footer from '../component/Footer';
import NavLink from '../component/NavLink';

const Courses = () => {
  return (
    <>
      <NavLink title ="Our Courses"/>
      <OurCourses />
      <Facilities/>
    </>
  )
}

export default Courses