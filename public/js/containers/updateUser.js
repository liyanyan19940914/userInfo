import {connect} from 'react-redux';
import UpdateUser from '../components/updateUser';

const mapDispatchToProps = (dispatch) =>{
    return {
        updateUser:(data)=>{
            dispatch({type:'UPDATEUSER',data})
        }

    }
}

export default connect(()=>{return {}},mapDispatchToProps)(UpdateUser);