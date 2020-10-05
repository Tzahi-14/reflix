import React, { Component } from 'react';

class Movie extends Component {

    toggle = () => {
         this.props.selectMovie(this.props.movie.id)
    }

    render() {
        if(this.props.movie.isRented){
            return (
                <div>
                    <span id="movie"><div className="rented">Rented :</div><button onClick={this.toggle} className="btn"><i className="fas fa-minus"></i></button><img id="img" src={this.props.movie.img} alt="" /></span>
                </div>
            )
        }
        else{
            return (
                <div>
                    <span id="movie" ><button onClick={this.toggle} className="btn"><i className="fas fa-plus-circle"></i></button><img id="img" src={this.props.movie.img} alt="" /></span>
                    {/* <div>Budget: {this.props.users[userId].budget}</div>
                    <div><input type="text" placeholder="Search" /><button>Search</button></div>
    
                    {this.props.state.movies.map(movie => {
                        if (movie.isRented) {
                            return <span id="movie" key={movie.id}><div className="rented">Rented :</div><button className="btn"><i className="fas fa-minus"></i></button><img id="img" src={movie.img} alt="" /></span>
                        }
                    })
                    }
    
                    <div>Catalog:</div>
    
                    {this.props.state.movies.map(movie => {
                        return <span id="movie" key={movie.id}><button onClick={this.toggle} className="btn"><i className="fas fa-plus-circle"></i></button><img id="img" src={movie.img} alt="" /></span>
                    })} */}
                </div>
            )
        }
    }




}

export default Movie