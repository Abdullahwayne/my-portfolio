import React from 'react'
import './home.css'
import hello from '../asset/👋 (1).png'
import link from '../asset/Group.svg'
import github from '../asset/github.png'
import twitter from "../asset/Vector.png"
import avatar from "../asset/AvatarAndIcons.svg"
const Home = () => {
  return (
    <div className='home-wrapper'>
            <div className='left'>
                <div className='hello'>
            <img src={hello} alt='hello'/>
            <p>Hello</p>
            </div>
            <div className='name'>
                <h2>Abdullah</h2>
                <h2>Iqbal</h2>

            </div>
            <div className='designation'>
                <p>Full-Stack MERN Developer</p>
            </div>
            <div className='social'>
                <img src={link} alt="linkdin"/>
                <img src={github} alt="linkdin"/>
                <img src={twitter} alt="linkdin"/>

                
            </div>
            </div>
            <div className='right'>
                <img src={avatar} alt="avtar"/>

            </div>


    </div>
  )
}

export default Home
