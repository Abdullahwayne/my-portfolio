import React from 'react'
import './cards.css';
import codeIcon from '../asset/CodeIcon.svg'
import projects from '../asset/ProjectsIcon.svg'
import design from '../asset/DesignIcon.svg'


const Cards = () => {
  return (
    <div className='card-wrapper'>
        <div className='cards-parent'>
        <div className='card-content'>
       <img src={codeIcon} alt= "icon"/>
       <h3>3 years of</h3>
       <h1>Programming</h1>
        </div>
        <div className='card-content1'> 
       <img src={projects} className="img-icon" alt= "icon"/>
       <h3>more than 50+ of</h3>
       <h1>Projects</h1>
        </div>
        <div className='card-content2'>
       <img src={design} alt= "icon"/>
       <h3>more than 3 Designer</h3>
       <h1>Awards</h1>
        </div>
        </div>
        <div className='bottom-card'>
        <div className='bottom-content'>
            <h3>MERN Stack</h3>
            <h1>Developer</h1>

        </div>
        <div className='bottom-content'>
            <h3>Freelance Project</h3>
            <h1>Completion</h1>

        </div>
        <div className='bottom-content'>
            <h3>Awarded as best </h3>
            <h1>Developer</h1>

        </div>

        </div>
      
    </div>
  )
}

export default Cards
