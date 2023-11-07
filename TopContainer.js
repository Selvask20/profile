import React from 'react'
import './TopContainer.css';
import { Element } from 'react-scroll';
import TopContent from '../TopContent/TopContent';
import './TopContainer.css'

function TopContainer() {
  return (
   <Element name='about' className='topcontainer'>
     <TopContent />
   </Element>

  )
}

export default TopContainer
