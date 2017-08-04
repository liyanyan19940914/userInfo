import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class UpdateUser extends Component{
    componentDidMount(){
        const user = this.props.location.query;
        document.getElementById('userName').value = user.UserName;
        document.getElementById('name').value = user.name;
        document.getElementById('sex').value = user.sex;
        document.getElementById('age').value = user.age;
        document.getElementById('tel').value = user.tel;
        document.getElementById('email').value = user.email;
        document.getElementById('note').value = user.note;
    }
    modifyUser(){
        const id = parseInt(this.props.location.query.id);
        const userName = this.refs.userName.value;
        const name = this.refs.name.value;
        const sex = this.refs.sex.value;
        const age = this.refs.age.value;
        const tel = this.refs.tel.value;
        const email = this.refs.email.value;
        const note = this.refs.note.value;
        this.props.updateUser({id,userName,name,sex,age,tel,email,note})
    }

    componentDidUpdate(){
        if(this.props.status === true){
            alert('修改成功！');
            browserHistory.push('/');
            this.props.reset({status:false})
        }else{
            alert('修改失败！');
        }
    }

    render(){
        return <div className="col-md-6 col-md-offset-3">
            <h1 className="center">修改用户</h1>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">用户名</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="userName" ref="userName"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">姓名</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="name" ref="name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">性别</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="sex" ref="sex"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">年龄</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="age" ref="age"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">联系电话</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="tel" ref="tel"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">邮箱</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="email" ref="email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">备注</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="note" ref="note"/>
                    </div>
                </div>
            </form>
            <div className="center">
                <button className="btn btn-info" onClick={this.modifyUser.bind(this)}>提交</button>
            </div>
        </div>
    }
}

export default UpdateUser;