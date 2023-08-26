import React from 'react';
import { Route , Routes , Link} from "react-router-dom";
import "./App.css";
import { Home , About , Contact , Courses , Blog } from './pages';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/courses' element={<Courses/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;