import React, {Component, Fragment} from 'react';
import { logOut } from '../../Reducer/reducer.js'
import { connect } from 'react-redux';

import Form from '../../Components/Form/Form.js'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode : '',
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
                <h2>Please Log In or Sign Up</h2>
                <input onClick={() => this.formMode('signup')} type="button" value="Sign Up"/>
                <input onClick={() => this.formMode('login')} type="button" value="Log In"/>
                {this.state.mode !== '' ? <input onClick={() => this.formMode('')} type="button" value="Cancel"/> : null}
                {this.state.mode !== '' ? <Form mode={this.state.mode}/>: null}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    switchMode : () => dispatch(logOut())
})

export default connect(null,mapDispatchToProps)(Landing)