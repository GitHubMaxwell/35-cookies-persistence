import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

export default class Dashboard extends Component {

    componentDidMount() {
        // check localstorage to see if the cookie is there and say something like success you are already signed in 
        superagent.get('http://localhost:3001/usernames/max')
        .then(response => {console.log('RESPONSE: ',response)})
    }
    render() {
        return (
            <Fragment>
                <h1>Hello</h1>
                <p>World</p>
            </Fragment>
        )
    }
}

/*
Create a landing page that enables a user to signup or login

Redirect the user to the dashboard page on signup or login

Store the users token in a cookie or localstorage on sign in
*/