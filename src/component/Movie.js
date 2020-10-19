import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {

    addMovieToRented = () => {
        this.props.addSelectedMovie(this.props.movie.id, this.props.user.name)
    }

    removeMovieFromRented = () => {
        this.props.removeSelectedMovie(this.props.movie.id, this.props.user.name)
    }

    render() {

        let checkIfRented = this.props.user.rentedMovie.some(movie => movie.id === this.props.movie.id)
        console.log(this.props.user)
        return (
            <div >
                {checkIfRented ? <i onClick={this.removeMovieFromRented} className="fas fa-minus"></i> :
                    <i onClick={this.addMovieToRented} className="fas fa-plus-circle"></i>}
                <Link to={`/movies/${this.props.movie.id}`}> <img id="img" src={this.props.movie.img} alt="" /></Link>
            </div>
        )
    }

}

export default Movie