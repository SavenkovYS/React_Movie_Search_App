import React from 'react'

function SearchMovies() {
    return (
        <form className="form">
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Type in a movie" />
            <button className="button" type="submit" >Search</button>
        </form>
    )
}

export default SearchMovies;
