import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions.js';

const HooksContainer = () => {
    let cakenum = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes: {cakenum}</h2>
            <button onClick={() => dispatch(buyCake())}>BuyCake</button>
        </div>
    )   
}

export default HooksContainer;