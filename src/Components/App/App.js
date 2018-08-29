import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard.js';
import Landing from '../Landing/Landing.js';
import '../../Style/main.scss';
import createAppStore from '../../Store/store.js'

const store = createAppStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/redirect" component={Dashboard} />
                </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

