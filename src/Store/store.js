import { createStore, applyMiddleware, compose} from 'redux'
// import { createStore } from 'redux'
import thunk from 'redux-thunk'
// import { logger, budgetCheck }from '../middleware/middleware.js'
import rootReducer from '../Reducer/reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default () => createStore(rootReducer);