import React from 'react'
import '../Header/header.css';
import { Alert } from 'antd';

import logo from '../asset/Logo.png'
const Header = () => {
  return (
    <div className='header-parent'>
      <div className='header-parent-wrapper'>
        <img src={logo} alt="logo"/>
        <div className='header-nav'>
          <span onClick={()=>{ <Alert message="No redirection" type="error" />}}>Home</span>
          <span onClick={()=>{ <Alert message="No redirection" type="error" />}}>Websites</span>
          <span onClick={()=>{ <Alert message="No redirection" type="error" />}}>About us</span>
          <span onClick={()=>{ <Alert message="No redirection" type="error" />}}>Contact us</span>
          <span onClick={()=>{ <Alert message="No redirection" type="error" />}}>Github</span>

          <span>LinkdIn</span>


          
        </div>
      </div>
    </div>
  )
}

export default Header
