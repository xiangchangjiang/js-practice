//es6创建一个user类
class User{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  showName(){
    console.log(this.name)
  }
  showAge(){
    console.log(this.age)
  }
}

var user1=new User('xx',34)
user1.showAge()
user1.showName()


//es6c创建一个VipUser类 继承自User
class VipUser extends User{
  constructor(name,age,level){
    super(name,age)
    this.level=level
  }
  showLevel(){
    console.log(this.level)
  }
}

var v1=new VipUser('张三',21,6)
v1.showAge()
v1.showLevel()
v1.showName()