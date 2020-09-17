import React from 'react';
import MovieList from './MovieList.jsx';
import FilteredMovieList from './FilteredMovieList.jsx';
import AddMovieBar from './AddMovieBar.jsx';
import axios from 'axios';


// var movies = [
//   {
//     title: 'Mean Girls',
//     director: 'Someone',
//     release_date: '2000'
//   },

// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [],
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('/api/movies')
      .then(({ data }) => this.setState({ movies: data }))
      .catch((err) => console.log(err));
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
        axios.post('/api/movies', movie)
          .then(this.getMovies)
          .catch((err) => console.log(err));
  }

  deleteMovie(movie) {
    axios.delete('/api/movies', {params: {title: movie}})
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
        <div>
          <div>
            <h2>Welcome to Your Movie List!</h2>
          </div>
          <div className='search-bar'>
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
            <button type="submit" value="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
          <div><MovieList movies={this.state.movies} deleteMovie={this.deleteMovie}/></div>
          <div><AddMovieBar addMovie={this.addMovie} movies={this.state.movies} /></div>
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