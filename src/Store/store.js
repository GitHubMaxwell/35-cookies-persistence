import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// middleware was preventing the reducers from making the superagent calls
// import { logger, formCheck } from './middleware.js'
import rootReducer from '../Reducer/reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware( thunk)));