import {connect} from 'react-redux';
import InsertUser from '../components/addUser';

const mapStateToProps = (state) => {
    console.log(state,state.addUser.status)
    return {
        status:state.addUser.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(data) => {
            console.log(data);
            dispatch({type:'ADDUSER',data})
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(InsertUser);