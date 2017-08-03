### userInfo

使用``npm install``安装依赖

使用``npm run webpack``进行打包

使用``npm start``启动服务

最后使用浏览器打开``http://localhost:3000``

使用``npm test``运行测试

### 数据库表的创建

create table userInfo(

    id int unsigned auto_increment primary key not null,

    userName varchar(50),

    name varchar(50),

    sex varchar(50),

    age int,

    tel varchar(50),

    email varchar(50),

    note varchar(50)

    )charset=utf8;