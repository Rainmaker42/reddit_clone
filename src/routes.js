// routes.js

import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App }>
        </Route>
    </Router>
);

export default Routes;