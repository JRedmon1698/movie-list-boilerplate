import React from 'react';

const MovieListEntry = (props) => (
    <div>
        <li>{props.movie.title}, {props.movie.director}, {props.movie.release_date}</li>
        <button onClick={() => {props.deleteMovie(props.movie.title)}}>Delete</button>
    </div>
);

export default MovieListEntry;