import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            inputVal: "",
        }
    }

    searchBar = (e) => {
        let inputValue = e.target.value
        this.props.searchMovie(inputValue)
        this.setState({ inputVal: inputValue })
    }


    render() {
        const userName = this.props.match.params.name
        const user = this.props.state.users.find(user => user.name === userName)
        return (
            <div>
                <div>Hello {userName} you have left with {user.budget}$ in your budget</div>
                <div id="search-bar">
                    <input type="text" placeholder="Enter movie name" value={this.state.inputVal} onChange={this.searchBar} />
                </div >
                {user.rentedMovie.length > 0 ? (<div id="1"> Rented: {user.rentedMovie.map(movie => {
                    return <Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} removeSelectedMovie={this.props.removeSelectedMovie} user={user} />
                })} </div>) : null}
                {this.props.state.filteredMovies.map(movie => {
                    return <span id="1"><Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} removeSelectedMovie={this.props.removeSelectedMovie} user={user} /></span>
                })
                }
            </div>
        )
    }
}

export default Catalog