import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // in the {} we are naming the BrowserRouter as Router

import App from './components/app';

/*anything that we want to be routed needs to be wrapped in the router, only need to have app wrapped around it,only place*/
ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
