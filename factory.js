/**
 * Created by Xin on 2022/3/1.
 */

// JS设计模式之工厂方法模式
function factory(role){
  if(this instanceof factory){
    var a = new this[role]();
    return a;
  }else{
    return new factory(role);
  }
}

factory.prototype={
  "superAdmin":function(){
    this.name="超级管理员";
    this.viewPage=["首页","发现页","通讯录","应用数据","权限管理"];
  },
  "admin":function(){
    this.name="管理员";
    this.viewPage=["首页","发现页","通讯录","应用数据"];
  },
  "user":function(){
    this.name="普通用户";
    this.viewPage=["首页","发现页","通讯录"];
  }
}

let superAdmin = factory("superAdmin");
console.log(superAdmin);
let admin = factory("admin");
console.log(admin);
let user = factory("user");
console.log(user);
