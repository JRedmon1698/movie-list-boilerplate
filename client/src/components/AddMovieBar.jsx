import React, { Component } from 'react';

class AddMovieBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            director: '',
            release_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
            movieObj: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <label>Director</label>
                <input
                    type='text'
                    name='director'
                    value={this.state.director}
                    onChange={this.handleChange}
                />
                <label>Release Year</label>
                <input
                    type='text'
                    name='release_date'
                    value={this.state.release_date}
                    onChange={this.handleChange}
                />
                <button>Add Movie</button>
            </form>
        )
    }


}

export default AddMovieBar;