//es5创建一个User类
function User(name, age) {
  this.name = name
  this.age = age

}

User.prototype.showName = function () {
  console.log(this.name)
}

User.prototype.showAge = function () {
  console.log(this.age)
}

var user = new User('xx', 23)
user.showName()
user.showAge()


//es5创建一个VipUser类 继承自User
function VipUser(name, age, level) {
  User.call(this, name, age)
  this.level = level
}
// console.log(VipUser.prototype, 1)
VipUser.prototype = new User()
// console.log(VipUser.prototype, 2)
// console.log(User.prototype,3)
// console.log(User.prototype.constructor===User,4)   //true
VipUser.prototype.constructor = VipUser
// console.log(VipUser.prototype, 5)
VipUser.prototype.showLevel = function () {
  console.log(this.level)
}

var v1 = new VipUser('老王', 34, 4)
// console.log(v1.__proto__)
v1.showLevel()