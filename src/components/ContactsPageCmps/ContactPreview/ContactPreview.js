import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.scss';
class ContactPreview extends Component {
    state = {
    }
    render() {
        return (
            <section className="contact-preview">
                <Link to={`/ContactPage/${this.props.contact._id}`}>
                    <div className="contact-container">
                        <img src={require(`../../../img/${this.props.contact.picture}`)} alt='no ' />
                        <div className="name-phone-container">
                            <span> {this.props.contact.name} </span>
                            <span> {this.props.contact.phone} </span>
                        </div>
                    </div>
                </Link>
                <hr />
            </section>
        );
    }
}

export default ContactPreview;