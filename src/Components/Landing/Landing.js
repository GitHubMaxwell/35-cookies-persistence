import React, {Component, Fragment} from 'react';
// import superagent from 'superagent';
import {connect} from 'react-redux';
import {signUp} from '../../Reducer/reducer.js'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
    }

    signUp(event) {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        let email = event.target.email.value

        let obj = {
            username,
            password,
            email
        }

        console.log('payload',obj)
        this.props.signUp(obj)
    }

    // componentDidMount() {
    //     // check localstorage to see if the cookie is there and say something like success you are already signed in 
    //     superagent.get('http://localhost:3001/usernames/max')
    //     .then(response => {console.log('RESPONSE: ',response)})
    // }

    render() {
        return (
            <Fragment>
                <h1>Please Log In or Sign Up</h1>
                <form onSubmit={this.signUp}>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                    <label>Password:</label>
                    <input type="text" name="password"/>
                    <label>Email:</label>
                    <input type="text" name="email"/>
                    <input onClick={()=>{console.log('signup')}}type="button" name="email" value="Sign Up"/>
                    <input type="button" name="email" value="Log In"/>

                    <button>Submit</button>
                </form>
                {this.props.loggedin.length !== 0 ? localStorage.setItem('JWT',this.props.loggedin): null}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    logIn : (payload) => dispatch(login(payload)),
    signUp : (payload) => dispatch(signUp(payload)),
})
const mapStateToProps = state => ({
    loggedin : state
})

export default connect(mapStateToProps,mapDispatchToProps)(Landing)
/*
Create a landing page that enables a user to signup or login

Redirect the user to the dashboard page on signup or login

Store the users token in localstorage on sign in
*/