import {connect} from 'react-redux';
import Home from '../components/home';

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllUsers:()=>{
            dispatch({type:"GETALLUSERS"});
        }
    }
};

export default connect(() => {return {}},mapDispatchToProps)(Home);