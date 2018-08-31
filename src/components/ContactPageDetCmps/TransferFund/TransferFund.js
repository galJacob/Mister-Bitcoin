import React, { Component } from 'react';
import './TransferFund.scss';
import UserService from '../../../services/UserService';
import { connect } from "react-redux";
import { addMove } from '../../../store/Actions';
import moment from 'moment';


const mapDispatchToProps = dispatch => {
    return {
        addMove: move => dispatch(addMove(move))
    }
}

class ConnectedTransferFund extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            user: null
        }
        UserService.checkIfUser()
            .then(user => {
                this.state.user = user;

            })
    }
    handleChange = (ev) => {
        this.setState({ amount: ev.target.value })
    }
    arrangeMove = () => {
        return {
            from: this.state.user._id,
            to: this.props.contact.name,
            at: moment.unix(Date.now()/1000).format('dddd, MMMM Do, YYYY h:mm:ss'),
            amount: this.state.amount
        }
    }
    onTransfer = () => {
        if (this.checkIfValidAmount()) {
            this.props.addMove(this.arrangeMove());
            // UserService.addMove(this.arrangeMove());
        }
    }
    checkIfValidAmount = () => {
        if (this.state.user.coins < this.state.amount || this.state.amount <= 0) {
            alert(`invalid amount, you have:${this.state.user.coins} coins`);
        }
        else {
            return true;
        }
    }
    render() {
        return (
            <div className="transfer-fund">
                <p>transfer coins to {this.props.contact.name}:</p>
                <div className="input-container">
                    <input placeholder="Enter the amount.." onInput={this.handleChange} value={this.state.amount} type="number" />
                    <button onClick={this.onTransfer}>transfer</button>
                </div>
            </div>
        );
    }
}

const TransferFund = connect(null, mapDispatchToProps)(ConnectedTransferFund);
export default TransferFund;