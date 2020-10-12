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
        // console.log(this.searchMovie())
        // this.setState({ inputVal: inputValue })
        // console.log(inputValue)
    }


    render() {
        const userName = this.props.match.params.name
        const user = this.props.state.users.find(user => user.name === userName)
        return (
            <div>
                <div>Hello {userName} you have left with {user.budget}$ in your budget</div>
                {/* {this.props.state.users.map(user => {
                    // console.log(user.budget)
                    return <div key={user.userId}>Budget:{user.budget}</div>
                })} */}
                {/* {user.rentedMovie.length>0? <div>rented:<Movie /> </div>} */}

                <div id="search-bar">
                    <input type="text" placeholder="Enter movie name" value={this.state.inputVal} onChange={this.searchBar} />
                </div>
                {user.rentedMovie.length > 0 ? (<div> Rented: {user.rentedMovie.map(movie => {
                    return <Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} removeSelectedMovie={this.props.removeSelectedMovie} user={user} />
                })} </div>) : null}
                {this.props.state.filteredMovies.map(movie => {
                    return <Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} removeSelectedMovie={this.props.removeSelectedMovie} user={user} />
                })
                }
                {/* {this.props.state.filteredMovies.map(movie => {
                    return <Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} removeSelectedMovie={this.props.removeSelectedMovie} user={user}/>
                })
                } */}
                {/* {this.props.state.movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} addSelectedMovie={this.props.addSelectedMovie} user={userName}/>
                })
                } */}
                {/* {this.props.searchMovie(e.target.value)} */}
            </div>
        )
    }




}

export default Catalog