import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import { icecreamReducer } from './icecreams/icecreamReducer'
import { userReducer } from './user/userReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
})

export default rootReducer;