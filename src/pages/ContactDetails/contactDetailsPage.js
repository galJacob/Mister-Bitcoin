import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactService from '../../services/ContactService';
import TransferFund from '../../components/ContactPageDetCmps/TransferFund/TransferFund';
import MoveList from '../../components/ContactPageDetCmps/MovesList/MovesList';
import './contactDetails.scss';

class ContactDetailsPage extends Component {
    state = {
        currContact: null,
    }
    componentDidMount() {
        this.setCurrContact(this.props.match.params.contactId);
    }
    componentWillReceiveProps(nextProps) {
        this.setCurrContact(nextProps.match.params.contactId);
    }
    render() {
        return (
            <section className="contact-details-page">
                {this.state.currContact && (
                    <React.Fragment>
                        <Link to={`/ContactPage/edit/${this.state.currContact._id}`}>
                            <FontAwesomeIcon size="2x" icon="pencil-alt" className="edit-icon" />
                        </Link>
                        <Link to='/ContactPage'>
                            <FontAwesomeIcon size="2x" icon="arrow-circle-left" className="back-icon" />
                        </Link>
                        <div className="details-container">
                            <img src={require(`../../img/${this.state.currContact.picture}`)} alt="no" />
                            <h1 className="name">{this.state.currContact.name}</h1>
                            <h2>{this.state.currContact.phone}</h2>
                            <h2>{this.state.currContact.email}</h2>
                        </div>
                        <TransferFund contact={this.state.currContact} />
                        <MoveList />
                    </React.Fragment>
                )}
            </section>
        );
    }
    setCurrContact = (currContactId) => {
        ContactService.getContactById(currContactId).then(contact => {
            this.setState({ currContact: contact });
        })
    }
}

export default ContactDetailsPage;