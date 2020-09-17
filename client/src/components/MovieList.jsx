import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => (
    <div> 
        <ul>
            {props.movies.map((movie, index) => (
                <MovieListEntry movie={movie} key={movie.title + index} deleteMovie={props.deleteMovie}/>
            ))}
        </ul>
    </div>
)

export default MovieList;