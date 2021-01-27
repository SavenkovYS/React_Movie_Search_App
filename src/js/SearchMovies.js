import React, {useState} from 'react'
import MovieCard from './MovieCard.js'

function SearchMovies() {

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([]);

    const searchMovies = async (evt) => {
        evt.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=0b4525be36888eb7860187eaa00d9e55&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input 
                className="input" 
                type="text" 
                name="query" 
                placeholder="Type in a movie" 
                value={query}
                onChange={(evt) => setQuery(evt.target.value)}
            />
            <button className="button" type="submit" >Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}

export default SearchMovies;
