
import { BUY_CAKE } from './cakeTypes';

export const buyCake = (cakeNum = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakeNum,
    }
}