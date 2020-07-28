import React from 'react';
import MovieList from './MovieList.jsx';

const MovieListEntry = (props) => 
    <li>{props.movies.title}</li>


export default MovieListEntry;