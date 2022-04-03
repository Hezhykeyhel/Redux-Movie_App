import React from 'react'
import {Link} from 'react-router-dom'
import './MoviesCard.scss'

const MoviesCard = (props) => {
  const {data} = props;
  return (
    <div className='movie_card'>
      <Link className='links' to={`/movie/${data.imdbID}`}>
        <div className='card_inn'>
          <div className='top_card'>
            <img src={data.Poster} alt={data.title}/>
          </div>
          <div className='bottom_card'>
            <div className='card_info'>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
        </Link>
    </div>
  )
}

export default MoviesCard