//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [{
      data: 'http://172.19.208.253/huodong1.jpg',
      id: 1
    }, {
      data: 'http://172.19.208.253/huodong2.jpg',
      id: 2
    }, {
      data: 'http://172.19.208.253/huodong3.jpg',
      id: 3
    }],
    remen_img: [
      'http://172.19.208.253/act_1.jpg',
      'http://172.19.208.253/act_2.jpg',
      'http://172.19.208.253/act_3.jpg'
    ],
    activity_img: [
      'http://172.19.208.253/paidui1.jpg',
      'http://172.19.208.253/paidui2.jpg'
    ],
    act : '',
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
    var that = this;
    wx.request({
      url: 'http://localhost/api/activity',
      method: "GET",
      dataType: "json",
      success: function (res) {
        console.log(res.data);
        that.setData({
          act: res.data
        })
      }
    })
  }
})
