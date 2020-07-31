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
      movies: movies
    }
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(e) {
  for (let i = 0; i < this.props.movies.length; i++) {
    if (e.target.value === this.props.movies[i].title) {
      return (this.props.movies[i].title);
    }
  }
}


  render() {
    return (
    <div>
      <div>Welcome to Movie List!</div>
      <div>
        <form>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </form>
      </div>
      <div><MovieList movies={this.state.movies}/></div>
    </div>
    )
  }
}



export default App;