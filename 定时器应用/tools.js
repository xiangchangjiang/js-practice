/*功能扩展:增加一个attr参数,用来传递需要改变的属性,如传入"height"  "top"等 */
/*增加一个回调函数callback*/
function move(obj,attr,target,speed,callback){
  var  current=parseInt(getStyle(obj,attr))
  if(target<current){
    speed=-speed 
  }
  clearInterval(obj.timer)
  /*之前用全局变量保存timer,当函数同时被多个元素使用时,后一个会终止前一个的计时器,导致一次只能使一个元素运动*
  /*在每一个调用move函数的对象中设置一个timer属性,使每一个对象独立保存自己的计时器,可以使多个元素调用函数互不影响*/
  obj.timer=setInterval(function(){
    console.log(getStyle(obj,attr))
    var oldValue=parseInt(getStyle(obj,attr))

    var newValue=oldValue+speed
    console.log(newValue)
    
    if (speed>0 && newValue>=target ||speed<0 && newValue<=target){
      newValue=target
    }
    obj.style[attr]=newValue+'px'
    if(newValue===target){
      clearInterval(obj.timer)
      callback && callback()
      // setTimeout(function(){callback && callback()},50) 
    }
  
  },50)
}

function getStyle(obj,name){
  return window.getComputedStyle?getComputedStyle(obj,null)[name]:obj.currentStyle[name]
}