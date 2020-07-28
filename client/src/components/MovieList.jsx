import React from 'react';

const MovieListEntry = (props) => (
    <div>
        <ul>{props.movies.map((movie) => (
            <MovieListEntry movie={movie} key={movie.title} />
        ))}
        </ul>
    </div>
)

export default MovieListEntry;