import React from 'react'
import SearchMovies from './SearchMovies.js'

class Main extends React.Component {
    render() {
      return (
        <div className="container">
          <h1 className="title">MovieDB Search</h1>
          <SearchMovies />
        </div>
    )
  } 
}

export default Main
  
