import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import FilteredMovieList from './FilteredMovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      filteredMovies: [],
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < this.state.movies.length; i++) {
    if (this.state.value === this.state.movies[i].title) {
      this.state.filteredMovies.push(this.state.movies[i]);
      this.setState({value: ''});
    } else {
      
    }
  }
}

handleChange(e) {
  this.setState({value: e.target.value});
}


  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
      <div>
        <div>
          <h2>Welcome to Movie List!</h2>
        </div>
        <div className ='search-bar'>
          <input type="text" value={this.state.value} onChange={this.handleChange}/> 
          <button type="submit" value="submit" onClick={this.handleSubmit}>{console.log(this.state.value, this.state.filteredMovies)}
            Search
            </button>
        </div>
        <div><MovieList movies={this.state.movies}/></div>
      </div>
      )
    } else {
      return (
        <div>
          <div>We found your movie!</div>
          <div><FilteredMovieList filteredMovies={this.state.filteredMovies}/></div>
        </div>
      )
    }
  }
}



export default App;