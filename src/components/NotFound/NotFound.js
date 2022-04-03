import React from 'react'
import notfound from '../../images/not_found.png'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div>
      <h4>The page you're looking for does not exist</h4>
      <img src={notfound} alt='Not_found'/>
    </div>
  )
}

export default NotFound