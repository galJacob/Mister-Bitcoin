import React, { Component } from 'react';
import './StatisticsPage.scss';
import ChartCmp from '../../components/StatisticsPageCmps/Chart';

class StatisticsPage extends Component {
    state={}
    render() {
        return (
            <section className="statistics-page">
                <h1>Statistics: BTC value by date</h1>
                <ChartCmp />
            </section>
        );
    }
}

export default StatisticsPage;