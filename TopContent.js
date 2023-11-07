import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

function TopContent() {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1><span>Mr</span>.SelvaKumar</h1>
            <p>A Professional Web Developer</p>
            <a href='www.google.com'>
                <button className='topcontent__downloadButton' >Download CV</button>
            </a>
            <Link to='project' smooth={true} duration={500}>
                <button className='topcontent__workButton'>MY Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
   