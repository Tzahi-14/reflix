import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './component/Landing ';
import Catalog from './component/Catalog';
import Movie from './component/Movie';
import MovieDetail from './component/MovieDetail';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [
        { id: 0, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users: [
        { userId: 0, name: "Tzahi", backgroundColor: "red", budget: 10, rentedMovie: [] },
        { userId: 1, name: "Dikla", backgroundColor: "pink", budget: 10, rentedMovie: [] },
        { userId: 2, name: "Leo", backgroundColor: "green", budget: 10, rentedMovie: [] },
        { userId: 3, name: "Messi", backgroundColor: "blue", budget: 10, rentedMovie: [] }
      ],
      currentUser: undefined,
      filteredMovies: []
    }
  }

  userEntered = (name) => {
    console.log("hello")
    console.log(name)
    this.setState({ currentUser: name })
  }

  addSelectedMovie = (movieId, name) => {
    let currentUsers = [...this.state.users]
    console.log(currentUsers)
    const findUser = currentUsers.find(user => user.name === name)
    console.log(findUser)
    const movie = this.state.movies.find(movie => movie.id === movieId)
    console.log(movie)
    const userRentThisMovie = findUser.rentedMovie.find(movie => movie.id === movieId)
    if (userRentThisMovie) {
      alert("Movie alreday rented")
    }
    else {
      if (findUser.budget >= 3) {
        findUser.rentedMovie.push(movie)
        // movie.isRented = true
        findUser.budget -= 3
        // let movieIsRented = findUser.rentedMovie.map(movie => movie.id === movieId)
        // movieIsRented.isRented=true
        // console.log(movieIsRented)
        // console.log(findUser)
        this.setState({
          users: currentUsers
        }, () => {
          console.log(this.state.users);
        })
      }
      else {
        alert("you are out of budget")
      }
    }
  }

  removeSelectedMovie = (movieId, name) => {
    let currentUsers = [...this.state.users]
    const findUser = currentUsers.find(user => user.name === name)
    console.log(findUser)
    const movie = this.state.movies.findIndex(movie => movie.id === movieId)
    console.log(movie)
    let movieIsRented = findUser.rentedMovie.map(movie => movie.id === movieId)
    console.log(movieIsRented)
    // movie.isRented = false
    findUser.rentedMovie.splice(movie.movieId, 1)
    findUser.budget += 3
    this.setState({
      users: currentUsers
    })
  }


  componentDidMount() {
    this.searchMovie('')
  }

  // selectMovie = (id) => {
  //   console.log("hey")
  //   console.log(id)
  //   let currentMovie = [...this.state.movies]
  //   const movie = currentMovie.find(movie => movie.id === id)
  //   movie.isRented = !movie.isRented
  //   this.setState({
  //     movies: currentMovie
  //   })
  // }

  searchMovie = (str) => {
    // let currentMovie = [...this.state.movies]
    if (str.length > 0) {
      let include = this.state.movies.filter(movie => movie.title.toLocaleLowerCase().includes(str))
      console.log(include)
      this.setState({
        filteredMovies: include
      })
      //  return include
    }
    else {
      // return this.state.movies
      this.setState({
        filteredMovies: this.state.movies
      })
    }
  }



  render() {
    return (
      <Router>
        <div className="App">
          <div id="home">
            <Link to="/"> Home</Link>
            <Link to={`/catalog/${this.state.currentUser}`}> Catalog</Link>
            <div id="logo">REFLIX</div>
          </div>
          <Route exact path="/" render={() => <Landing users={this.state.users} userEntered={this.userEntered} />} />
          <Route exact path="/catalog/:name" render={({ match }) => <Catalog match={match} state={this.state} searchMovie={this.searchMovie} addSelectedMovie={this.addSelectedMovie} removeSelectedMovie={this.removeSelectedMovie} currentUser={this.state.currentUser} />} />
          <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />}></Route>
          {/* <Route path="/movies/:id" exact render={({match}) => <MovieDetail match={match} movies={this.state.movies}/>}></Route> */}

        </div>
      </Router>
    )
  }

}

export default App;
