import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../redux/icecreams/icecreamActions';

const IcecreamContainer = () => {
    let icecreamNum = useSelector((state) => state.icecream.numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ICECREAMS: {icecreamNum}</h2>
            <button onClick={() => dispatch(buyIcecream())}>BuyIcecream</button>
        </div>
    )
}

export default IcecreamContainer;