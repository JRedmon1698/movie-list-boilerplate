import React from 'react';

const MovieListEntry = (props) => (
    <div> {console.log('props: ', props.movies)}
        <ul>
            {movies.map((movie) => (
            <MovieListEntry movie={movie} key={movie.title} />
        ))}
        </ul>
    </div>
)

export default MovieListEntry;