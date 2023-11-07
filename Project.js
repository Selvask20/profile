import React from 'react'
import './Project.css'
import {Element} from "react-scroll";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

 
function Project() {
  return (
   <Element id='projects00' style={{marginTop:"50px"}}>
   <Element id='projects'>
    <div id='expense1' data-aos="fade-right">
      <h2>Todo App</h2>
      <div id='todo'>
      <ArrowForwardIcon sx={{marginLeft:'45%',width:"15%",Color:"black"}}></ArrowForwardIcon>
            <Button id='but' variant="contained" href="https://todowebapp0000.netlify.app/" target='_blank' rel="noreferrer" >
        Link
      </Button>
      <div className='clo' >
     
   

      </div>
        </div>
        </div>
    
       <div id='expense1' style={{marginLeft:"200px"}} data-aos="fade-right" >
    <h2>Expense App</h2>
    <div id='ex'>
            <ArrowForwardIcon sx={{marginLeft:'65%',width:"15%",Color:"black"}}></ArrowForwardIcon>
            <Button id='but' variant="contained" href="https://expenseform.netlify.app/" target='_blank' rel="noreferrer" >
        Link
      </Button>
        </div>
        </div>

        <div id='expense1'style={{marginLeft:"450px"}} data-aos="fade-right">
     
        <h2>News HomePage</h2>
       <div id='newas'>
       <ArrowForwardIcon sx={{marginLeft:'35%',width:"15%",Color:"black"}}></ArrowForwardIcon>
            <Button id='but' variant="contained" href="https://visitnewspage.netlify.app" target='_blank' rel="noreferrer" >
        Link
      </Button>
        </div>          
        </div>        
    
        
        </Element>
        </Element>
  )
}

export default Project
