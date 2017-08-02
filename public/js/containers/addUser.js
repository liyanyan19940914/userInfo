import {connect} from 'react-redux';
import InsertUser from '../components/addUser';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit:(data) => {
            console.log(data);
            dispatch({type:'ADDUSER',data})
        }
    }
};


export default connect(() => {return {}},mapDispatchToProps)(InsertUser);