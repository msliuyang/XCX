//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // motto: '你的婚姻，我来包办',
    service: '为你服务',
    userInfo: {}
  },
  //事件处理函数
  bindServiceTap: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
