function drag(obj) {
  obj.onmousedown = function (event) {
    //设置捕获鼠标按下,解决IE8中默认拖拽不能用return false解决的问题.
    //后边要设置一个obj.releaseCapture(),否则陷入循环,所有点击都被obj捕获.
    obj.setCapture && obj.setCapture()
    //解决事件对象兼容问题
    event = event || window.event
    console.log('鼠标按下 了')
    //解决滚动条问题,只要用到了事件对象的clientX clientY就需要考虑滚动条问题,因为clientX clientY是鼠标相对于当前视口的坐标.
    //pageX和pageY如果不考虑兼容IE8,则是一个很好的选择,因为他们是鼠标相对于文档的坐标
    var st1 = document.documentElement.scrollTop
    var sl1 = document.documentElement.scrollLeft
    /*当出现滚动条时,要加上滚动距离,才是obj左上角与光标间的距离*/
    var ofx = event.clientX - obj.offsetLeft + sl1
    var ofy = event.clientY - obj.offsetTop + st1
    document.onmousemove = function (event) {
      event = event || window.event
      var x = event.clientX - ofx
      var y = event.clientY - ofy
      //解决滚动条问题,只要用到了事件对象的clientX clientY就需要考虑滚动条问题,因为clientX clientY是鼠标相对于当前视口的坐标.
      //pageX和pageY如果不考虑兼容IE8,则是一个很好的选择,因为他们是鼠标相对于文档的坐标
      var st2 = document.documentElement.scrollTop
      var sl2 = document.documentElement.scrollLeft
      obj.style.left = x + sl2 + 'px'
      obj.style.top = y + st2 + 'px'
    }
    document.onmouseup = function () {
      console.log('鼠标抬起来了')
      //鼠标抬起,取消捕获鼠标按下事件
      obj.releaseCapture && obj.releaseCapture()
      //box1.onmousedown=null 不能写这句,写了只能拖拽一次
      document.onmousemove = null
      document.onmouseup = null
    }
    //取消浏览器默认拖拽事件(不取消会导致 页面全选后再拖动box1时异常)
    //但这个方法对IE8无效
    return false
  }
}