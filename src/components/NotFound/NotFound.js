import React from 'react'
import notfound from '../../images/not_found.png'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <h1>404 error</h1>
      <h1> Uh oh!!! The page you're looking for does not exist</h1><br/>
      <img src={notfound} alt='Not_found'/>
    </div>
  )
}

export default NotFound