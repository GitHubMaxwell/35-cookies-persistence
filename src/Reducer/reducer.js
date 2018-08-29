import superagent from 'superagent';

// Action Constants
const SIGN_UP = 'SIGN_UP';
const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
const LOG_IN = 'LOG_IN';
const LOG_IN_ERROR = 'LOG_IN_ERROR';
const LOG_OUT = 'LOG_OUT';
const RESET_ERROR = 'RESET_ERROR';


// Action Creators
export const signUp = payload => {
    // console.log('signin payload: ',payload)

// you get a JWT back from this

    // console.log('SIGNUP payload: ',payload)
    return dispatch => {
        const url = 'http://localhost:3001/signup'
        
        superagent.post(url)
        .send(payload)
        .then(response => {
            // console.log('signup response.text: ', response.text)
            localStorage.setItem('JWT', response.text)
            return dispatch({type: SIGN_UP, payload: response.text})
        })
        .catch(error => {
            // console.log('signup error status: ', error.status)
            return dispatch({type: SIGN_UP_ERROR, payload: error.status})

        })
    }
}
export const logIn = payload => {
    // console.log('login payload: ',payload)

    return dispatch => {
        const url = `http://localhost:3001/login`;
        superagent.get(url)
        .auth(payload.username, payload.password)
        .then(response => {
            localStorage.setItem('JWT', response.text)
            return dispatch({type: LOG_IN, payload: response.text})
        })
        .catch(error => {
            // console.log('login error status: ', error.status)
            return dispatch({type: LOG_IN_ERROR, payload: error.status})
        })
    }
}
export const logOut = () => {

    return dispatch => {
        return dispatch({type: LOG_OUT})
    }
}

export const resetError = () => {
    return dispatch => {
        return dispatch({type: RESET_ERROR})
    }
}

// Initial State
let initialState = {
    token : '',
    error : ''
}


// Reducer
export default (state=initialState,action) => {
    let {type, payload} = action;

    // console.log('action type: ',type)
    // console.log('payload: ',payload)

    switch(type) {
        case SIGN_UP : return {...state,token : payload}
        case SIGN_UP_ERROR : return {...state,error : payload}
        case LOG_IN : return {...state,token : payload}
        case LOG_IN_ERROR : return {...state,error : payload}
        case LOG_OUT : return initialState
        case RESET_ERROR : return {...state, error : ''}

        default : return state
    }
}

// you want to overwrite what the state is so in READ_ITEM you pass the array of objects in the payload instead of just the objects
// in the switch statement return the [...payload]