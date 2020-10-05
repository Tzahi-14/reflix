import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {


    render() {
        return (
            <div>
                <h1 id="title">Who's Watching?</h1>

                <div className="user">
                    <Link to="/catalog" > {this.props.users.map(user => {
                        return <div className="u" style={{backgroundColor: user.backgroundColor}} key={user.userId}>{user.name}</div>
                    })}</Link>
                </div>

            </div>
        )
    }




}

export default Landing 