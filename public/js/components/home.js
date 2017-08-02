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
    updateUser(user){
        const path = "updateUser?UserName=" + user.userName + "&name=" + user.name + "&sex=" + user.sex + "&age=" +
            user.age +"&tel=" + user.tel + "&email=" + user.email + "&note=" + user.note + "&id=" + user.id;
        browserHistory.push(path);
    }
    componentDidUpdate(){
        console.log('delete',this.props.delStatus)
        if(this.props.delStatus === true){
            this.props.getAllUsers();
        }else if(this.props.delStatus === false){
            alert('删除失败！');
        }
    }
    render(){
        return <div >
            <div className="position">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control"  placeholder="请输入用户名进行查询"/>
                        </div>
                        <button type="submit" className="btn btn-primary distance">查询</button>
                    </div>
                    <button type="button" className="btn btn-info address" onClick={this.addUser.bind(this)}>添加用户</button>
                </form>
            </div>
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
                                      data-placement="bottom" title="编辑" onClick={this.updateUser.bind(this,ele)}></span>
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