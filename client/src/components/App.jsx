import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import FilteredMovieList from './FilteredMovieList.jsx';
import AddMovieBar from './AddMovieBar.jsx';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      filteredMovies: [],
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    for (let i = 0; i < this.state.movies.length; i++) {
      if ((this.state.searchValue).toLowerCase() === (this.state.movies[i].title).toLowerCase()) {
        this.state.filteredMovies.push(this.state.movies[i]);
        this.setState({ searchValue: '' });
      } else {
        // alert('Movie not found!');
        this.setState({ searchValue: '' });
      }
    }
  }


  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  addMovie(movie) {
    for (let i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies.indexOf(movie) !== -1) {
        // alert('Movie is already in list!');
        console.log('in first if block');
        return;
      } else {
        console.log(movie);
        this.setState(state => {
          const movies = this.state.movies.concat(movie);
          return {
            movies,
            filteredMovies: [],
            searchValue: ''
          }
        })
      }
    }
  }

  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
        <div>
          <div>
            <h2>Welcome to Movie List!</h2>
          </div>
          <div className='search-bar'>
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
            <button type="submit" value="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
          <div><MovieList movies={this.state.movies} /></div>
          <div><AddMovieBar addMovie={this.addMovie} movies={this.state.movies}/></div>
        </div>
      )
    } else {
      return (
        <div>
          <div>We found your movie!</div>
          <div><FilteredMovieList filteredMovies={this.state.filteredMovies} /></div>
        </div>
      )
    }
  }
}



export default App;