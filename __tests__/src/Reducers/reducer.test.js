import reducer from '../../../src/Reducer/reducer.js'

describe('Reducers', ()=> {

    it('SIGN_UP Success', () => {

        let oldState = { 
            token: '', 
            error: ''
        };

        let action = {
            type: 'SIGN_UP',
            payload: {
                token : 'thisisamagicaltoken',
            }
        }

        let state = reducer(oldState, action);
        let newState = {"error": "", "token": {"token":"thisisamagicaltoken"}};
        expect(state).toEqual(newState)
    })

    it('SIGN_UP_ERROR', () => {
        let oldState = { 
            token: '', 
            error: ''
        };

        let action = {
            type: 'SIGN_UP_ERROR',
            payload: {
                token : '',
                error : 400
            }
        }

        let state = reducer(oldState, action);
        expect(state.error).toEqual({"error": 400, "token": ""})
    })

    it('LOG_IN Success', () => {

        let oldState = { 
            token: '', 
            error: ''
        };

        let action = {
            type: 'LOG_IN',
            payload: {
                token : 'thisisamagicaltoken',
            }
        }

        let state = reducer(oldState, action);

        expect(state.token).toEqual({"token": "thisisamagicaltoken"})
    })

    it('LOG_IN_ERROR', () => {

        let oldState = { 
            token: '', 
            error: ''
        };

        let action = {
            type: 'LOG_IN_ERROR',
            payload: {
                token : '',
                error : 401
            }
        }

        let state = reducer(oldState, action);
        expect(state.error).toEqual({"error": 401, "token": ""})
    })

    it('LOG_OUT Success', () => {
        
        let oldState = { 
            token: '123912309120931923810293812039', 
            error: ''
        };

        let newState = { 
            token: '', 
            error: ''
        };

        let logOut = {
            type: 'LOG_OUT'
        }
        let state = reducer(oldState, logOut);
        expect(state).toEqual(newState)
    })
})