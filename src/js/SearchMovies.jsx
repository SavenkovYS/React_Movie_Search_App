import React, {useState} from 'react'

function SearchMovies() {

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([]);

    const searchMovies = async (evt) => {
        evt.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=0b4525be36888eb7860187eaa00d9e55&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
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
                <div className="card" key={movie.id}>
                    <img 
                        className="card__image" 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                    />
                    <div className="card__content">
                        <h3 className="card__title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_avarage}</small></p>
                        <p className="card__description">{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default SearchMovies;
