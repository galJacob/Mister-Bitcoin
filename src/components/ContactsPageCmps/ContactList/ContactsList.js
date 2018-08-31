import React, { Component } from 'react';
import ContactPreview from '../ContactPreview/ContactPreview';
import './ContactList.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { contactList: state.contactList };
};

class connectedContactList extends Component {
    state = {
    }
    componentDidMount() {

    }
    render() {
        return (
            <section className="contact-list" >
                <ul className="contacts-list">
                    {this.props.contactList.map(contact => {
                        return (
                            <li key={contact._id} >
                                <ContactPreview contact={contact} />
                            </li>
                        )
                    })}
                </ul>
                <Link to='/ContactPage/edit'><FontAwesomeIcon className="add-contact-btn" icon="plus-circle" size="3x" /></Link>
            </section>
        )
    }
}

const ContactList = connect(mapStateToProps)(connectedContactList);
export default ContactList;