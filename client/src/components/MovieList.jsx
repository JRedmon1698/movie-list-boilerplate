import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({ movies }) => (
    <div> 
        <ul>
            {movies.map((movie, index) => (
                <MovieListEntry movie={movie} key={movie.title + index} />
            ))}
        </ul>
    </div>
)

export default MovieList;