import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Landing from '../landing/Landing.js';
import Dashboard from '../Dashboard/Dashboard.js';
// import '../../style/main.scss';
// import createAppStore from '../../Store/store.js'

// const store = createAppStore();

export default class App extends React.Component {

    render() {
        return (
            <Dashboard/>
            // <Provider store={store}>
            //     <BrowserRouter>
            //                 <Route exact path="/" component={Dashboard} />
            //     </BrowserRouter>
            // </Provider>
        )
    }
}