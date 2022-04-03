import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../../images/Avatar1.jpg';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Movie App</div>
      </Link>
    <div className='u_image'>
      <img src={avatar} alt=''/>
    </div>
    </div>
  )
}

export default Header