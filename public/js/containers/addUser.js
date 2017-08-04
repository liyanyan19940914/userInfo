import {connect} from 'react-redux';
import InsertUser from '../components/addUser';

const mapStateToProps = (state) => {
    return {
        status:state.addUser.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(data) => {
            dispatch({type:'ADDUSER',data})
        },
        reset:(status)=>{
            dispatch({type:'RESET',status})
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(InsertUser);