import React from 'react'

function SearchMovies() {

    const searchMovies = async (evt) => {
        evt.preventDefault();
        
        const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=0b4525be36888eb7860187eaa00d9e55&language=en-US&query=${query}&page=1&include_adult=false`;
        

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        } catch(err) {
            console.log(err);
        }
        
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Type in a movie" />
            <button className="button" type="submit" >Search</button>
        </form>
    )
}

export default SearchMovies;
