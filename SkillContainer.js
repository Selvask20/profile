import React from 'react';
import {Element} from "react-scroll";
import skillimg from "../../image/c.jpg";
import './SkillContainer.css';
import LinearProgress from '@mui/material/LinearProgress';

function SkillContainer() {
  return (
   <Element className='skillcontainer' id='skills'>
    <div className='skillcontainer__image'data-aos="fade-up-right" >
        <img src={skillimg}style={{height:"60vh"}} alt='...'></img>
    </div>
    <div className='skillcontainer__text' data-aos="fade-up-left">
         <h2>SKILLSET</h2>
     <div className='skillcontainer__skillset' data-aos="fade-up-left">
        <h5>ReactJS</h5>
     </div>
     <div className="skillcontainer__slider skillcontainer__slider1 " data-aos="fade-up-left">
     <LinearProgress variant="determinate"  value={70} />
     </div>
     <div className='skillcontainer__skillset' data-aos="fade-up-left">
        <h5>NodeJS</h5>
     </div>
     <div className='skillcontainer__slider  skillcontainer__slider2' data-aos="fade-up-left">
     <LinearProgress variant="determinate" value={60} />
     </div>
     <div className='skillcontainer__skillset' data-aos="fade-up-left"  >
        <h5>Express</h5>
     </div>
     <div className='skillcontainer__slider skillcontainer__slider3' data-aos="fade-up-left">
     <LinearProgress variant="determinate" value={50} />
     </div>
     <div className='skillcontainer__skillset' data-aos="fade-up-left">
        <h5>MongoDB</h5>
     </div>
     <div className='skillcontainer__slider skillcontainer__slider4' data-aos="fade-up-left">
     <LinearProgress variant="determinate" value={40} />
     </div>
     <div className='skillcontainer__skillset' data-aos="fade-up-left">
        <h5>JavaScript</h5>
     </div>
     <div className='skillcontainer__slider skillcontainer__slider5' data-aos="fade-up-left">
     <LinearProgress variant="determinate" value={60} />
     </div>
     <div className='skillcontainer__skillset' data-aos="fade-up-left">
        <h5>HTML,CSS</h5>
     </div>
     <div className='skillcontainer__slider skillcontainer__slider6' data-aos="fade-up-left">
     <LinearProgress variant="determinate" value={70} />
     </div>

    </div>

   </Element>
  )
}

export default SkillContainer
