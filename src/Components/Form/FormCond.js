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

                <input id="username" type="text" name="username" placeholder="Username"/>

                <input id="password" type="text" name="password" placeholder="Password"/>

                <input id="email" type="text" name="email" placeholder="E-mail"/>

                <input id="enter" onClick={this.props.enterForm} type="button" value="Submit"/>

            </form> : this.props.mode === 'login' ?
            <form id="form">
                <input id="username" type="text" name="username" placeholder="Username"/>

                <input id="password" type="text" name="password" placeholder="Password"/>

                <input id ="enter" onClick={this.props.enterForm} type="button" value="Submit"/>

            </form> : null 
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     resetError : () => dispatch(resetError()),
// })

// export default connect(null,mapDispatchToProps)(FormCond)