import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import SignupPage from './pages/SignupPage/SignupPage';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact component={HomePage} path='/' />
                    <Route component={ContactPage} path='/ContactPage' />
                    <Route component={StatisticsPage} path='/StatisticsPage' />
                    <Route exact component={SignupPage} path='/SignupPage' />
                </Switch>
            </React.Fragment>
        );
    }
}

export {
    Routes
};