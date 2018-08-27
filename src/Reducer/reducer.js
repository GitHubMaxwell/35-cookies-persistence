import superagent from 'superagent';

// Action Constants
const SIGN_UP = 'SIGN_UP';
// const CHECK_LOCAL = 'CHECK_LOCAL';
const LOG_IN = 'LOG_IN';

// Action Creators
export const signUp = payload => {
// you get a JWT back from this
/*
    {
        "username":"max",
        "password":"max",
        "email":"max@max.com"
    }
*/
    console.log('signup payload: ',payload)
    return dispatch => {
        const url = 'http://localhost:3001/signup'
        
        superagent.post(url)
        .send(payload)
        .then(response => {
            console.log('signup response.text: ', response.text)
            
            return dispatch({type: SIGN_UP, payload: response.text})
        })
    }
}
// export const checkLocal = () => {
// // check http://localhost:8080 localstorage?
// // does this even need a URL
//     return dispatch => {
//         const url = 'https://lab14-max.herokuapp.com/api/v1/cats';
//         superagent.get(url)
//         .then(response => {
//             return dispatch({type: READ_ITEM, payload : response.body})
//         })
//     }
// }

export const logIn = payload => {
    //is basic auth requiring username and password
    // auth('max','max')

    return dispatch => {
        const url = `http://localhost:3001/login/${payload.id}`;
        superagent.get(url)
        .auth(payload)
        .then(response => {
            return dispatch({type: LOG_IN, payload: response})
        })
    }
}
// Initial State
// initial state localstorage
let initialState = [];

// Reducer
export default (state=initialState,action) => {
    let {type, payload} = action;

    console.log('action type: ',type)
    console.log('payload: ',payload)

    switch(type) {
        case 'SIGN_UP' : return [...state,payload]
        // case 'CHECK_LOCAL' : return [...payload]
        case 'LOG_IN' : return state.map(item => {
            return item._id === payload._id ? payload : item
        })
        // case 'DELETE_ITEM' : return state.filter(item => item._id !== payload)
        default : return state
    }
}

// you want to overwrite what the state is so in READ_ITEM you pass the array of objects in the payload instead of just the objects
// in the switch statement return the [...payload]