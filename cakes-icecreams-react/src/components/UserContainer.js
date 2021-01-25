import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/user/userActions';
import {connect} from 'react-redux';

const UserContainer = ({ userData, userAction }) => {
    useEffect(() => {
        userAction();
    }, []);
    return (
        userData.loading ? (<h2>Loading</h2>) :
            userData.error ? (<h2>{userData.error}</h2>) :
                (<div>
                    <h2>Users List</h2>
                    <div>
                        {userData.users.map(user => <p>{user}</p>)}
                    </div>
                </div>)
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAction: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
//connects cake container component to redux store (check app.js file)
// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer); 