import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const FilteredMovieList = (props) => (
    <div> 
        <ul>
            {props.filteredMovies.map((movie, index) => (
                <MovieListEntry movie={movie} key={movie.title + index} />
            ))}
        </ul>
    </div>
)

export default FilteredMovieList;