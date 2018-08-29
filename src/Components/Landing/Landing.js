import React, {Component, Fragment} from 'react';
import { logOut } from '../../Reducer/reducer.js'
import { connect } from 'react-redux';

import Form from '../../Components/Form/Form.js'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode : 'login',
        }
        this.formMode = this.formMode.bind(this)
    }

    formMode(selection) {
        let mode = selection;
        this.setState({mode})
        this.props.switchMode()
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="inner-container">
                        <h2>Please Log In or Sign Up</h2>
                        <input id="signup" onClick={() => this.formMode('signup')} type="button" value="Sign Up"/>

                        <input id="login" onClick={() => this.formMode('login')} type="button" value="Log In"/>

                        {this.state.mode !== '' ? <Form formMode={this.formMode} mode={this.state.mode}/>: null}

                        {this.state.mode !== '' ? <input id="cancel" onClick={() => this.formMode('')} type="button" value="Cancel"/> : null}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    switchMode : () => dispatch(logOut())
})

export default connect(null,mapDispatchToProps)(Landing)