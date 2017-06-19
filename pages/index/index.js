//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hotAct : '',
    soonAct : '',
    newAct : '',
    /** 

    activity_img: [
      'http://172.19.208.253/paidui1.jpg',
      'http://172.19.208.253/paidui2.jpg'
    ],
    */

    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    focus: false,
  }, toDetailPage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    });
  }, onLoad: function () {
    wx.showLoading({
      title: '载入中',
      mask : true
    })
    this.getActInfo();
    
  },

  /**
    *获取活动信息
    */

  getActInfo: function () {
    var that = this
    wx.request({
      url: 'http://172.19.208.253:8080/api/activity/getActIndex',
      method: "GET",
      success : function (res) {
        wx.hideLoading();
        that.setData({
          hotAct : res.data.data.hotAct,
          soonAct : res.data.data.soonAct,
          newAct : res.data.data.newAct
        })
      }
    })
  }
})
