// export const logger = store => next => action => {
//     console.log('logger POL');

//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }

// export const formCheck = store => next => action => {
//     /*
//     {
//         type: "SIGN_UP", 
//         payload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IY…0NDR9.sShpJ4IZVzo74LjcoDY0i78edbPo-xX53vFyIorpWCU"
//     }
//     */
//     // the action has either succeded or failed before it even gets to the middleware so the logger doesnt work either
    
//     console.log('formCheck POL: ',action);

//     if(action.type === 'SIGN_UP') {
//         if(action.payload.username === '' || action.payload.password === '' || action.payload.email === ''){
//             alert('You have to enter a value for every field')
//         }
//     } else if(action.type === 'LOG_IN'){
//         if(action.payload.username === '' || action.payload.password === '') {
//             alert('You are missing either the username or password')
//         }
//     } else {
//         return next(action)
//     }
//   }