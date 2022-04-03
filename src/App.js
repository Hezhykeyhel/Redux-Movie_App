import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails/MovieDetails'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
        <Router>
          <Header></Header>
          <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App