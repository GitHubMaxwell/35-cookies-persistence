import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { resetError } from '../../Reducer/reducer.js'


export default class FormCond extends Component {

    // not working here either / the component isnt re-mounting after you press the OK button in the alert pop-up
    // componentWillMount() {
    //     this.props.resetError()
    // }

    render() {
        return(
            this.props.mode === 'signup' ? 
                <form id="form">
                <label>Username:</label>
                <input id="username" type="text" name="username"/>
                <label>Password:</label>
                <input id="password" type="text" name="password"/>
                <label>Email:</label>
                <input id="email" type="text" name="email"/>
                <input onClick={this.props.enterForm} type="button" name="email" value="Sign Up"/>
            </form> : this.props.mode === 'login' ?
            <form id="form">
                <label>Username:</label>
                <input id="username" type="text" name="username"/>
                <label>Password:</label>
                <input id="password" type="text" name="password"/>
                <input onClick={this.props.enterForm} type="button" name="email" value="Log In"/>
            </form> : null 
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     resetError : () => dispatch(resetError()),
// })

// export default connect(null,mapDispatchToProps)(FormCond)