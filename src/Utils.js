// import uniqid from 'uniqid';

// function checkIsUser() {

// }

function saveUserToStorage(userName, user) {
    localStorage.setItem(userName, JSON.stringify(user));
}
function loadUserFromStorage() {
    let keys = Object.keys(localStorage);
    return JSON.parse(localStorage.getItem(keys[0]));
}
function randNum() {
    return parseInt((Math.random() * 8 + 1), 10);
}
export default {
    saveUserToStorage,
    loadUserFromStorage,
    randNum
}