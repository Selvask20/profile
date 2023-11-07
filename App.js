import React from 'react'
import Chartme from './components/Chartme/Chartme';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';


function App() {
  return (
    <div>

      <Header  />
      <TopContainer />
      <SkillContainer />
      <Project />
      <Chartme />
      
    </div>
  )
}

export default App
