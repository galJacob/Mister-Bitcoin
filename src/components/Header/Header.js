import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserService from '../../services/UserService';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            isActive: 'home',
        };
    }
    componentDidMount() {
        UserService.checkIfUser().then(loggedInUser => {
            this.setState({ loggedInUser })
        }).catch(() => {
        })
    }
    setActiveLink = linkType => {
        this.setState({ isActive: linkType });
    }
    render() {
        return (
            <section className="header">
                <span className="logo">Mr.Bitcoin</span>
                <ul>
                    <li><Link to='/'><FontAwesomeIcon size="2x" onClick={() => this.setActiveLink('home')}
                        className={`icon ${this.state.isActive === 'home' ? 'active-link' : ''}`} icon="home" /></Link></li>
                    <li><Link to='/ContactPage'><FontAwesomeIcon size="2x" onClick={() => this.setActiveLink('contacts')}
                        className={`icon ${this.state.isActive === 'contacts' ? 'active-link' : ''}`} icon="address-book" /></Link></li>
                    <li><Link to='/StatisticsPage'><FontAwesomeIcon size="2x" onClick={() => this.setActiveLink('chart')}
                        className={`icon ${this.state.isActive === 'chart' ? 'active-link' : ''}`} icon="chart-line" /></Link></li>
                </ul>
                <hr />
            </section>
        );
    }
}

export {
    Header
}