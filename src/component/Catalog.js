import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {

    render() {
        return (
            <div>                
                {this.props.state.movies.map(movie => {
                        return <Movie key={movie.id} movie={movie} selectMovie={this.props.selectMovie} />
                })
                }
            </div>
        )
    }




}

export default Catalog