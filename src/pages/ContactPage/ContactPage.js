import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './ContactPage.scss';
import ContactList from '../../components/ContactsPageCmps/ContactList/ContactsList';
import ContactService from '../../services/ContactService';
import UserService from '../../services/UserService';
import ContactDetailsPage from '../ContactDetails/contactDetailsPage';
import ContactEditPage from '../ContactEditPage/ContactEditPage';
import ContactFilter from '../../components/ContactsPageCmps/ContactFilter/ContactFilter';

class ContactPage extends Component {
    state = {
        contacts: null,
    }
    componentDidMount() {
        UserService.checkIfUser()
            .then(() => {
                ContactService.getContacts().then(contacts => {
                    this.setState({ contacts });
                })
            })
            .catch(() => {
                alert('sign up!');
                this.props.history.push('/');
            })
    }
    render() {
        return (
            <section className="contact-page">
                <Switch>
                    {this.state.contacts && <Route exact path='/ContactPage' render={() => {
                        return (
                            <React.Fragment>
                                <ContactFilter contacts={this.state.contacts} />
                                <ContactList contacts={this.state.contacts} />
                            </React.Fragment>
                        )
                    }
                    } />}
                    <Route exact component={ContactEditPage} path='/ContactPage/edit/:contactId?' />
                    <Route exact component={ContactDetailsPage} path='/ContactPage/:contactId' />
                </Switch>
            </section>
        )
    }
}

export default ContactPage;