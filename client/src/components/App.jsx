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
  }
  render() {
    return (
    <div>
      <div>movies!</div>
      <div><MovieList movies={this.state.movies}/></div>
    </div>
    )
  }
}



export default App;