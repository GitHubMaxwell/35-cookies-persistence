import React, { Component, Fragment } from 'react';
import { logOut } from '../../Reducer/reducer.js'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

        render() {
            if(!this.props.token) {
                return <Redirect to={{pathname: "/"}}/>
            } else {
            return (
                <Fragment>
                    <h1>Dashboard</h1>
                    <p>you have successfully logged in/signed up</p>
                    <input onClick={this.props.logOut} type="button" value="Log Out"/>
                </Fragment>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    logOut : () => dispatch(logOut()),
})

const mapStateToProps = state => ({
    token : state.token
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)