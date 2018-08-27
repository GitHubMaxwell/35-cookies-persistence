import React from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App/App.js'
// import './style/main.scss';


class Main extends React.Component {
    render() { return <App/> }
}

ReactDOM.render(<Main/>, document.getElementById('root'))