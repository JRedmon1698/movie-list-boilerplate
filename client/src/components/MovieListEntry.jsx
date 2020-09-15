import React from 'react';

const MovieListEntry = ({ movie }) => (
    <li>{movie.title}, {movie.director}, {movie.release_date}</li> 
);

export default MovieListEntry;