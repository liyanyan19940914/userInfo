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
                <tbody>
                {
                    this.props.allUsers.map((ele,index) => {
                        return <tr key={index}>
                            <td>{ele.userName}</td>
                            <td>{ele.name}</td>
                            <td>{ele.sex}</td>
                            <td>{ele.age}</td>
                            <td>{ele.tel}</td>
                            <td>{ele.email}</td>
                            <td>{ele.note}</td>
                            <td>
                                <span className="glyphicon glyphicon-trash address" data-toggle="tooltip"
                                      data-placement="bottom" title="删除" ></span>
                                <span className="glyphicon glyphicon-pencil" data-toggle="tooltip"
                                      data-placement="bottom" title="编辑"></span>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    }
}

export default Home;