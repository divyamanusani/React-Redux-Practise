const redux = require('redux');
const axios = require('axios');
const thunkMiddleWare = require('redux-thunk').default;

const applyMiddleWare = redux.applyMiddleware;
const createStore = redux.createStore;

const inistate = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST',
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error,
    }
}

const reducer = (state = inistate, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST': return {
            ...state,
            loading: true,
        }

        case 'FETCH_USERS_SUCCESS': return {
            loading: false,
            users: action.payload,
            error: ''
        }


        case 'FETCH_USERS_FAILURE': return {
            loading: false,
            users: [],
            error: action.payload,
        }


        default: return state;

    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts') 
            .then(res => {
                //res.data gives data in array
                //res.json displays in json format
                let userData = res.data.map((user)=>user.id);
                dispatch(fetchUsersSuccess(userData));
            })
            .catch(error => {

                let err=error.message;
                //error.message gives error desc
                dispatch(fetchUsersFailure(err));
            })
    }
}

const store = createStore(reducer,applyMiddleWare(thunkMiddleWare));
store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUsers());

//store.dispatch(fetchUsersFailure());