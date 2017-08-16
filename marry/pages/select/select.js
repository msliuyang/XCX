// pages/select/select.js

var selectData = require('../../data/index-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nav:[
        { text: '婚戒', selectId: 0 },
        { text: '婚礼服', selectId: 1 },
        { text: '婚妆', selectId: 2 },
        { text: '婚纱照', selectId: 3 },
        { text: '婚车', selectId: 4 },
        { text: '酒店', selectId: 5 }
        ]
  },
  bindNavTap: function(event){
    this.selectListInfo(event.currentTarget.dataset.navid);
  },
  selectListInfo: function (id) {
    var arr = [];
    for (var i = 0; i < selectData.selectKey.length; i++) {
      if (id == selectData.selectKey[i].listId) {
        arr.push(selectData.selectKey[i]);
      }
    }
    console.log(arr);
    this.setData({
      selectData: arr
    }); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectListInfo(options.id); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})