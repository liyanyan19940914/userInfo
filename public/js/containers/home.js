import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps=(state)=>{
    return {
        allUsers:state.getAllUsers.users,
        delStatus:state.deleteUser.delStatus,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllUsers:()=>{
            dispatch({type:"GETALLUSERS"});
        },
        deleteUser: (id)=> {
            dispatch({type: "DELETEUSER", id})
        },
        searchUser:(userName)=>{
            dispatch({type:"SEARCHUSER",userName})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);