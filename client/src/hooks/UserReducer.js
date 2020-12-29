import React, {useReducer} from "react";

const initialState = {user: null};

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'SIGN_IN':
            return {user: action.data};
        case 'SIGN_OUT':
            return {user: null};
        default:
            return state;
    }
}
