import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MoviesCard from '../MovieCards/MoviesCard'
import './MovieLists.scss'

const MovieLists = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderAllMovies, renderShows = "";

  renderAllMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
       <MoviesCard key={index} data={movie}/>
    ))
  ) : (
  <div className='movies_error'>
    <h3>{movies.Error}</h3>
  </div>
  );
  renderShows = shows.Response === 'True' ? (
    shows.Search.map((movie, index) => (
       <MoviesCard key={index} data={movie}/>
    ))
  ) : (
  <div className='movies_error'>
    <h3>{shows.Error}</h3>
  </div>
  );
  return (
      <div className='movies_wrapped'>
        <div className='myMovieList'>
          <h2>Movies</h2>
          <div className='movie_container'>{renderAllMovies}</div>
        </div>
        <div className='myShows'>
          <h2>Shows</h2>
          <div className='movie_container'>{renderShows}</div>
        </div>
      </div>
  )
}

export default MovieLists