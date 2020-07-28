import React from 'react';
import { movies } from '../data/movies.js';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    }
  }
  render() {
    return (
    <div>
      <div>movies!</div>
      <div><MovieList movies={movies}/></div>
      <div><MovieListEntry/></div>
    </div>
    )
  }
}



export default App;