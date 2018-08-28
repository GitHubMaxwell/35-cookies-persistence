import React, {Component} from 'react';
import { signUp, logIn, resetError } from '../../Reducer/reducer.js'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormCond from './FormCond.js'

class Form extends Component {
    constructor(props) {
        super(props)
        this.enterForm = this.enterForm.bind(this)
    }

    enterForm() {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value        
        let obj;
        if(this.props.mode === 'signup') {
        let email = document.getElementById('email').value

             obj = {
                username,
                password,
                email
            }
            this.props.signUp(obj)
        } else {
             obj = {
                username,
                password
            }
            this.props.logIn(obj)
        }
        document.getElementById('form').reset();
    }

    // this needs to be in the FormCond?
    // componentWillMount() {
    //     this.props.resetError()
    // }

    render() {
            if(this.props.token !== '') {
                // console.log('token: ', this.props.token)
                return <Redirect to={{pathname: "/redirect"}}/>
            } else if(this.props.error === 401) {
                alert('Log In Error')
                // maybe reset the error state here (this.props.resetError()) and after login error too so that it keeps throwing the alert popup (app state versus visual state? do it in the component)

                // warning.js:33 Warning: Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.

                this.props.resetError()
                return <FormCond enterForm={this.enterForm} mode={this.props.mode}/>
            } else if(this.props.error === 400){
                alert('Sign Up Error')

                this.props.resetError()
                return <FormCond enterForm={this.enterForm} mode={this.props.mode}/>
            } else {
            return (
                <FormCond enterForm={this.enterForm} mode={this.props.mode}/>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    logIn : (payload) => dispatch(logIn(payload)),
    signUp : (payload) => dispatch(signUp(payload)),
    resetError : () => dispatch(resetError()),
})

const mapStateToProps = state => ({
    token : state.token,
    error : state.error
})

export default connect(mapStateToProps,mapDispatchToProps)(Form)