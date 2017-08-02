import React,{Component} from 'react';

class Home extends Component{
    componentWillMount(){
        this.props.getAllUsers();
    }

    render(){
        return <div >
            <table className="table table-bordered location">
                <thead>
                <tr>
                    <th className="col-md-1">用户名</th>
                    <th className="col-md-1">姓名</th>
                    <th className="col-md-1">性别</th>
                    <th className="col-md-1">年龄</th>
                    <th className="col-md-1">电话</th>
                    <th className="col-md-1">邮箱</th>
                    <th className="col-md-1">其他</th>
                    <th className="col-md-1">操作</th>
                </tr>
                </thead>
            </table>
        </div>
    }
}

export default Home;