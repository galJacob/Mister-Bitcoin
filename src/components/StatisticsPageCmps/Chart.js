import React, { Component } from 'react';
import BitconService from '../../services/BitconService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import moment from 'moment';
import './Chart.scss';

class ChartCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btcStats: [],
            months: [],
            resValues: null,
        }
    }
    componentDidMount() {
        BitconService.getStatisticsData()
            .then(res => {
                let tempValues = res.values.map(value => {
                    let time = moment.unix(value.x).format('MMMM Do YYYY, h:mm');
                    let amount = Math.round(value.y);
                    return { x: time, "value": amount }
                })
                // console.log(tempValues);
                this.setState({ resValues: tempValues })
            })
    }
    formatTicks = tickItem => {
        let momentObj = moment(tickItem, 'MMMM Do YYYY, h:mm');
        let time = momentObj.format('MMMM\'YY');
        time = time.substr(0, 3) + time.substr(time.length - 3, time.length - 1);
        return time;
    }
    formatToolTip = value => {
        value += ' USD($)';
        // console.log();
        return value;
    }
    render() {
        return (
            <section className='chart-line'>
                {(this.state.resValues &&
                    <LineChart width={window.innerWidth - 2} height={250} data={this.state.resValues}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid vertical={false} />
                        {/* {console.log(this.state.resValues)} */}
                        <XAxis stroke="white" tick={{ fill: '#efefef' }} interval={window.innerWidth <= 500 ? 65 : 29}
                            tickFormatter={this.formatTicks} dataKey="x" />
                        <YAxis stroke="white" tick={{ fill: '#efefef' }} />
                        <Tooltip formatter={this.formatToolTip} cursor={false} />
                        <Line activeDot={true} dot={false} type="linear" dataKey="value" strokeWidth={2.5} stroke="#039BD3" />
                    </LineChart>
                )}
            </section>
        );
    }

}

export default ChartCmp;