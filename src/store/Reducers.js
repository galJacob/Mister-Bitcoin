import { ADD_MOVE } from './Action-types';
import { FILTER_LIST } from './Action-types';
import Utils from '../Utils';

const initialState = {
    userMoves: Utils.loadUserFromStorage() ? Utils.loadUserFromStorage().moves : [],
    contactList: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVE:
            let user = Utils.loadUserFromStorage();
            user.moves.push(action.payload);
            user.coins -= action.payload.amount;
            Utils.saveUserToStorage(user.name, user);
            return { ...state, userMoves: [...state.userMoves, action.payload] };
        case FILTER_LIST:
            let contacts = action.payload.contacts;
            let filterBy = action.payload.filterBy.toLowerCase();
            let filteredList = contacts.filter(contact => contact.name.substr(0, filterBy.length).toLowerCase() === filterBy);
            return { ...state, contactList: filteredList }
        default:
            return state;
    }
};
export default rootReducer;