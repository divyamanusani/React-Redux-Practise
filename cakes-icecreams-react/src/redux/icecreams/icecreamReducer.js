
import { BUY_ICECREAM } from './icecreamTypes.js'

let inistate = {
    numOfIceCreams: 20,
}

 export const icecreamReducer = (state = inistate, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }

        default:
            return state;
    }
}