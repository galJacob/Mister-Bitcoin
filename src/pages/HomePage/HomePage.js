import React, { Component } from 'react';
import './HomePage.scss';
import UserService from '../../services/UserService';
import BitcoinService from '../../services/BitconService';
import MovesList from '../../components/ContactPageDetCmps/MovesList/MovesList';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            btcVal: null,
        }
    }
    getBitCoinValue = () => {
        BitcoinService.getBitcoinRate().then(btcVal => {
            this.setState({ btcVal });
        })
    }
    componentDidMount() {
        UserService.checkIfUser().then(user => {
            this.setState({ user });
            this.getBitCoinValue();
        }).catch(() => {
            this.props.history.push('/SignupPage');
        })
    }
    render() {
        return (
            <section className="home-page">
                {this.state.user &&
                    (
                        <React.Fragment>
                            <img src={require(`../../img/${this.state.user.picture}`)} alt="no" />
                            <h1 className="greetings">Hi, {this.state.user.name}</h1>
                            <hr />
                            <div className="user-btc-cont">
                            <div className="btc-val-container">
                                <h1 className="btc-val">Current BTC in USD</h1>
                                <span>{1 / this.state.btcVal} &#36;</span>
                            </div>
                            <div className="user-details">
                                <h2>Current balance</h2>
                                <h2>BTC:&nbsp; <span>{this.state.user.coins} &#3647;</span></h2>
                                <h2>USD:&nbsp; <span>{1 / this.state.btcVal * this.state.user.coins} &#36;</span></h2>
                            </div>
                            </div>
                            <div className="moves-list-container">
                                <MovesList btcValue={this.state.btcVal} />
                            </div>
                        </React.Fragment>
                    )
                }
            </section>
        )
    }
}

export default HomePage;