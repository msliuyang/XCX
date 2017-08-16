// pages/index/index.js

var listData = require('../../data/index-data.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner/banner3.png',
      '../../images/banner/banner4.png',
      'https://farm1.staticflickr.com/625/22219054081_a387c0aa87_z.jpg',
      'https://r.bstatic.com/images/hotel/max1024x768/401/40111765.jpg',
      'http://www.twword.com/uploads/wiki/4d/55/859384_5.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
  bindSelectTap: function (event) {
    var listId = event.currentTarget.dataset.listid;
    wx.navigateTo({
      url: '../select/select?id=' + listId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从缓存中取本地数据
    this.setData({
      listData: listData.localData
    });



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