const { FETCH_USERS_REQ, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = require("./userTypes");

let iniState = {
    loading: true,
    users:[],
    error: ''
}

export const userReducer = (state = iniState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {

                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload


            }
        default: return state;
    }
}