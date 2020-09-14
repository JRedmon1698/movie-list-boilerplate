import React, { Component } from 'react';

class AddMovieBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState ({
            title: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>{console.log(this.state, this.props)}
                    <input
                    type='text'
                    name='movieTitle'
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                <button>Add Movie</button>
            </form>
        )
    }

    
}

export default AddMovieBar;