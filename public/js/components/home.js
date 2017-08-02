import React,{Component} from 'react';
import {browserHistory} from 'react-router'

class Home extends Component{
    componentWillMount(){
        this.props.getAllUsers();
    }
    addUser(){
        browserHistory.push('/addUser');
    }
    deleteUser(id){
        var isDelete = confirm('是否要删除此用户');
        if(isDelete){
            this.props.deleteUser(id);
        }
    }
    render(){
        return <div >
            <button type="button" className="btn btn-info position" onClick={this.addUser.bind(this)}>添加用户</button>
            <table className="table table-bordered location table-hover">
                <thead>
                <tr className="font">
                    <td className="col-md-1">用户名</td>
                    <td className="col-md-1">姓名</td>
                    <td className="col-md-1">性别</td>
                    <td className="col-md-1">年龄</td>
                    <td className="col-md-1">电话</td>
                    <td className="col-md-1">邮箱</td>
                    <td className="col-md-1">其他</td>
                    <td className="col-md-1">操作</td>
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
                                      data-placement="bottom" title="删除" onClick={this.deleteUser.bind(this,ele.id)}></span>
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