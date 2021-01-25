import React from 'react';
import { buyCake } from '../redux/cakes/cakeActions';
import { buyIcecream } from '../redux/icecreams/icecreamActions'
import { connect } from 'react-redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item {props.item} </h2>
            <button onClick={props.buyItem}>BuyItems</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.cake ?
        state.cake.numOfCakes : state.icecream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());
    return {
        buyItem: dispatchFunc
    }
}

//connects cake container component to redux store (check app.js file)
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer); 