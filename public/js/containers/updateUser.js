import {connect} from 'react-redux';
import UpdateUser from '../components/updateUser';

const mapStateToProps = (state) => {
    console.log(state,state.updateUser.status)
    return {
        status:state.updateUser.status
    }
};


const mapDispatchToProps = (dispatch) =>{
    return {
        updateUser:(data)=>{
            dispatch({type:'UPDATEUSER',data})
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);