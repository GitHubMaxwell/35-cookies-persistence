import reducer, { signUp, logIn } from '../../../src/Reducer/reducer.js'

describe('Reducers', ()=> {
    xit('Test: return orignal state on passing in an incorrect/invalid action', () => {
        let state = {
            rootReducer: [],
        }
        const red = reducer(state, 'wrong')
        expect(red).toEqual({
            rootReducer: [],
        })
    })

    xit('SIGN_UP Success', () => {

        let cat = {
            type: 'CREATE_ITEM',
            payload: {
                name : 'cat',
                color : 'green'
            } 
        }

        let state = reducer([], cat);
        let newState = [ { name: 'cat', color: 'green' } ];
        expect(state).toEqual(newState)
    })

    xit('SIGN_UP Fail', () => {

        let cat = { 
            type : 'READ_ITEM',
            payload : [{ name: 'cat', color: 'green', _id: 1 }]
        };

        let readState = reducer([], cat)

        expect(readState.length).toEqual(1)
        expect(readState).toEqual([{ name: 'cat', color: 'green', _id: 1 }])
    })

    xit('LOG_IN Success', () => {

        let oldState = [ { name: 'cat', color: 'green', _id: 1 } ];

        let dog = {
            type: 'UPDATE_ITEM',
            payload: {
                name : 'dog',
                color : 'yellow',
                _id : 1
            } 
        }
        let state = reducer(oldState, dog);
        let updateState = [ { name: 'dog', color: 'yellow', _id: 1 } ];

        expect(state).toEqual(updateState)
    })

    it('LOG_IN Fail', () => {

        // need to use Jest done() ?
        let oldState = { 
            token: '', 
            error: ''
        };

        let action = {
            type: 'LOG_IN',
            payload: {
                username : 'max',
                password : ''
            }
        }

        let state = reducer(oldState, action);

        // expect(state.token).not.toBeDefined()
        expect(state.error).toBe(401)

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