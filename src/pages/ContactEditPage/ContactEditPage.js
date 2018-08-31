import React, { Component } from 'react';
import ContactService from '../../services/ContactService';
import './ContactEditPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class ContactEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currContact: null,
            nameValue: '',
            phoneValue: '',
            emailValue: ''
        };
    }
    deleteContact = () => {
        ContactService.deleteContact(this.state.currContact._id).then(() => {
            alert('contact deleted!');
        })
        this.props.history.push('/ContactPage');
    }
    handleChange = (event, type) => {
        if (type === 'name') this.setState({ nameValue: event.target.value });
        else if (type === 'phone') this.setState({ phoneValue: event.target.value });
        else this.setState({ emailValue: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let newContact;
        if (this.state.currContact) {
            newContact = {
                _id: this.state.currContact._id,
                picture: this.state.currContact.picture,
                name: this.state.nameValue,
                phone: this.state.phoneValue,
                email: this.state.emailValue
            }
        }
        else {
            newContact = {
                name: this.state.nameValue,
                phone: this.state.phoneValue,
                email: this.state.emailValue
            }
        }
        ContactService.saveContact(newContact).then(() => {
            alert('contact saved')
        })
        this.props.history.push('/ContactPage');
    }
    componentDidMount() {
        if (this.props.match.params.contactId) {
            ContactService.getContactById(this.props.match.params.contactId).then(currContact => {
                this.setState({ currContact });
                this.setState({ nameValue: currContact.name });
                this.setState({ phoneValue: currContact.phone });
                this.setState({ emailValue: currContact.email });
            })
        }
    }
    render() {
        return (
            <section className="contact-edit-page">
                {this.state.currContact? <h1>edit contact</h1>:<h1>add new contact</h1>}
                {this.state.currContact && <FontAwesomeIcon size="2x" icon="trash-alt" className="delete-icon" onClick={this.deleteContact} />}
                <Link to='/ContactPage'>
                    <FontAwesomeIcon size="2x" icon="arrow-circle-left" className="back-icon" />
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <input placeholder="name" type="text" onInput={e => this.handleChange(e, 'name')} value={this.state.nameValue} />
                        </li>
                        <li>
                            <input placeholder="phone" type="text" onInput={e => this.handleChange(e, 'phone')} value={this.state.phoneValue} />
                        </li>
                        <li>
                            <input placeholder="email" type="text" onInput={e => this.handleChange(e, 'email')} value={this.state.emailValue} />
                        </li>
                    </ul>
                    <input type="submit" value="save" />
                </form>
            </section>
        );
    }
}

export default ContactEditPage;