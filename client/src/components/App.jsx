import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';

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
      filteredMovies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {

  for (let i = 0; i < this.state.movies.length; i++) {
    if (e.target.value === this.state.movies[i].title) {
      this.setState({filteredMovies: e.target.value});
    }
  }
  e.preventDefault();
}



  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
      <div>
        <div>
          <h2>Welcome to Movie List!</h2>
        </div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Movies:
            <input type="text" value={this.state.value} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div><MovieList movies={this.state.movies}/></div>
      </div>
      )
    } else {
      return (
        <div>
          <div><MovieList filteredMovies={this.state.filteredMovies}/></div>
        </div>
      )
    }
  }
}



export default App;