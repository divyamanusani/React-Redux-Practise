import React from 'react';
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>BuyCake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//connects cake container component to redux store (check app.js file)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer); 