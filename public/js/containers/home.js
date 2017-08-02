import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps=(state)=>{
    console.log("state users",state.getAllUsers.users);
    return {
        allUsers:state.getAllUsers.users,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllUsers:()=>{
            dispatch({type:"GETALLUSERS"});
        },
        deleteUser: (id)=> {
            dispatch({type: "DELETEUSER", id})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);