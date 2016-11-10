/**
 * shared-state.js
 * module for declaring our shared redux store
 * and various action creation functions
 */
import {createStore} from "redux";

const ADD_FAV_ACTION = "addfav";
const REMOVE_FAV_ACTION = "removefav";
const DEFAULT_STATE = {favorites: []};
const LS_KEY = "redux-store";

function reducer(state, action) { // intial state, and action object
    switch(action.type) { // switch is similar to if/else if/else statements
        case ADD_FAV_ACTION: // if action.type = this case of ADD_FAV_ACTION
            return Object.assign({}, {favorites: state.favorites.concat(action.item)}); // creating new object and cloning favorites (+ action.item) into the new object
        case REMOVE_FAV_ACTION:
            return Object.assign({}, {favorites: state.favorites.filter(item => item.id != action.id)});
        default:
            return state;
    }
}

export function addFavorite(item) {
    return {
        type: ADD_FAV_ACTION,
        item: item
    }
}

export function removeFavorite(id) { // These functions can be exportable by other modules aka we can call them
    return {
        type: REMOVE_FAV_ACTION,
        id: id
    }
}

var savedState = JSON.parse(localStorage.getItem(LS_KEY));
export var store = createStore(reducer, savedState || DEFAULT_STATE); 

store.subscribe(() => localStorage.setItem(LS_KEY, JSON.stringify(store.getState())));
