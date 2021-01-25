import React, { useState } from 'react';
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from 'react-redux';


const NewCakeContainer = (props) => {
    const [cakenum, setCakeNum] = useState(1);
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <input type="text" onChange={e => setCakeNum(e.target.value)} value={cakenum} />
            <button onClick={()=>props.buyCake(cakenum)}>Buy {cakenum} Cakes</button>
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
        buyCake: (cakeNum) => dispatch(buyCake(cakeNum))
    }
}

//connects cake container component to redux store (check app.js file)
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer); 