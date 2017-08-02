import React, {Component} from 'react';

class InsertUser extends Component{
    addUser(){
        const userName = this.refs.userName.value;
        const name = this.refs.name.value;
        const sex = this.refs.sex.value;
        const age = this.refs.age.value;
        const tel = this.refs.tel.value;
        const email = this.refs.email.value;
        const note = this.refs.note.value;
        console.log(userName,name,sex,age,tel,email,note);
        if(userName === '' || name === '' || sex === '' || age === '' || tel === '' || email === '' || note === ''){
            alert('请补全信息')
        }
        else{
            this.props.onSubmit({userName,name,sex,age,tel,email,note});
        }
    }
    render(){
        return <div className="col-md-6 col-md-offset-3">
            <h1 className="center">添加用户</h1>
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
                    <label className="col-md-2 control-label">其他</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="note" ref="note"/>
                    </div>
                </div>
            </form>
            <div className="center">
                <button className="btn btn-info" onClick={this.addUser.bind(this)}>提交</button>
            </div>
        </div>
    }
}

export default InsertUser;