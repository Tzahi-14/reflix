import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    userloggedIn = (e) =>{
        console.log("hey")
        this.props.userEntered(e.target.id)
        console.log(this.props)
        console.log(e.target.name)
    }

    render() {
        return (
            <div>
                <h1 id="title">Who's Watching?</h1>
                
                <div className="user">
                    {this.props.users.map(user =>{
                        return <Link to={`/catalog/${user.name}`}>
                            <div className="u" style={{backgroundColor: user.backgroundColor}} key={user.userId} id={user.name} name={user.name} onClick={this.userloggedIn}>{user.name}</div>
                        </Link>
                    })}
                </div>

            </div>
        )
    }




}

export default Landing 