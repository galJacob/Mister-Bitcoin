import React, { Component } from 'react';
import './ContactFilter.scss';
import { connect } from 'react-redux';
import { filterList } from '../../../store/Actions';

const mapDispatchToProps = dispatch => {
    return {
        filterList: (filterBy, contacts) => dispatch(filterList(filterBy, contacts))
    };
};

class ConnectedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBy: ''
        }
        // console.log(props);
        this.props.filterList('', props.contacts)
    }
    handleChange = ev => {
        this.setState({ filterBy: ev.target.value });
        this.props.filterList(ev.target.value, this.props.contacts)
    }
    render() {
        return (
            <React.Fragment>
                <input placeholder="search for name.." onInput={e => this.handleChange(e)} value={this.state.filterBy} />
            </React.Fragment>
        );
    }
}

const ContactFilter = connect(null, mapDispatchToProps)(ConnectedFilter);
export default ContactFilter;