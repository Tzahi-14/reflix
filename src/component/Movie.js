import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {

    // toggle = () => {
    //     // console.log(this.props.movie.id)
    //     // console.log(this.props.user)
    //     console.log(this.props.movie.rentedMovie)
    //     const checkIfRented = this.props.user.rentedMovie.map(movie=> movie.id===this.props.movie.id)
    //     console.log(checkIfRented)
    //     if(!checkIfRented){
    //         console.log("print")
    //         this.props.removeSelectedMovie(this.props.movie.id,this.props.user.name)
    //     }
    //     else{
    //         this.props.addSelectedMovie(this.props.movie.id,this.props.user.name)
    //         console.log("try again")
    //     }
    // }

    addMovieToRented = () =>{
        this.props.addSelectedMovie(this.props.movie.id,this.props.user.name)
    }

    removeMovieFromRented = ()=>{
       this.props.removeSelectedMovie(this.props.movie.id,this.props.user.name)
    }

render (){

    // let checkIfRented = false
    // if(this.props.user.rentedMovie.length > 0) {
    //  checkIfRented = this.props.user.rentedMovie.find(movie=> movie.id===this.props.movie.id)
    //  checkIfRented = checkIfRented ? checkIfRented.isRented : false
    // // checkIfRented = !checkIfRented.isRented
    // }
    let checkIfRented = this.props.user.rentedMovie.some(movie => movie.id===this.props.movie.id)
    console.log(this.props.user)
    // console.log(checkIfRented)
        return(
        <div>
            {checkIfRented?<i onClick={this.removeMovieFromRented} className="fas fa-minus"></i> :
            <i onClick={this.addMovieToRented} className="fas fa-plus-circle"></i>}
            <Link to={`/movies/${this.props.movie.id}`}> <img id="img" src={this.props.movie.img} alt="" /></Link>
        </div>
    )
}

    // render() {
    //     console.log(this.props.user.rentedMovie)
    //     if(this.props.user.rentedMovie){
    //         console.log(this.props.user.rentedMovie)
    //         console.log("!11")
    //         return (
    //             <Link to={`/movies/${this.props.movie.id}`} ><span id="movie"><div className="rented">Rented :</div><button onClick={this.toggle} className="btn"><i className="fas fa-minus"></i></button><img id="img" src={this.props.movie.img} alt="" /></span></Link>
    //         )
    //     }
    //     else{
    //         console.log(this.props.user.rentedMovie)
    //         console.log("!11")
    //         return (
    //             <Link to={`/movies/${this.props.movie.id}`}> <span id="movie" ><button onClick={this.toggle} className="btn"><i className="fas fa-plus-circle"></i></button><img id="img" src={this.props.movie.img} alt="" /></span></Link>
    //         )
    //     }
    // }
    // render() {
    //     if(this.props.movie.isRented){
    //         return (
    //             <Link to={`/movies/${this.props.movie.id}`} ><span id="movie"><div className="rented">Rented :</div><button onClick={this.toggle} className="btn"><i className="fas fa-minus"></i></button><img id="img" src={this.props.movie.img} alt="" /></span></Link>
    //         )
    //     }
    //     else{
    //         return (
    //             <Link to={`/movies/${this.props.movie.id}`}> <span id="movie" ><button onClick={this.toggle} className="btn"><i className="fas fa-plus-circle"></i></button><img id="img" src={this.props.movie.img} alt="" /></span></Link>
    //         )
    //     }
    // }

}

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
export default Movie