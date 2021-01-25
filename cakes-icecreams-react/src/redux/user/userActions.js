import { FETCH_USERS_REQ, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios';

export const fetchUsersReq = () => {
    return {
        type: FETCH_USERS_REQ,
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return  (dispatch)=> {
        dispatch(fetchUsersReq());
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then(res => {
                //res.data gives data in array
                //res.json displays in json format
                let userData = res.data.map((user)=>user.name);
                dispatch(fetchUsersSuccess(userData));
            })
            .catch(error => {

                let err=error.message;
                //error.message gives error desc
                dispatch(fetchUsersFailure(err));
            })
    }
}
