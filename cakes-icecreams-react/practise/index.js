const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

let buycake = () => {
    return {
        type: 'BUYCAKE',
        info: 'buycake action'
    }
}

const cakestate = {
    cakenum: 10,
}

const icestate = {
    icenum: 20,
}

const cakeReducer = (state = cakestate, action) => {
    switch (action.type) {
        case 'BUYCAKE': return {
            cakenum: state.cakenum - 1,
        }


        default: return state;
    }
}

const iceReducer = (state = icestate, action) => {
    switch (action.type) {
        case 'BUY_ICE': return {
            icenum: state.icenum - 1,
        }

        default: return state;
    }
}

const buyice = () => {
    return {
        type: 'BUY_ICE',
    }
}

//combine reducer is used to combine multiple reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceReducer

})

//const store = createStore(reducer);
//const store=createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('inistate=');
//getstte returns state of both reducers
console.log(store.getState());

// whenever state changes subscribe func is getting called
let unsub = store.subscribe(() => console.log(store.getState()));

//dispatch calls reducer function and takes action paramenter as buycake()
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyice());
//unsub();
store.dispatch(buycake());


