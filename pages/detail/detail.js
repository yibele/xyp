// pages/detail/apply.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    act: '',
    leftNum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getActDetail(options.id);
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

  },

  /**
   * 转到报名详细页面
   */
  toApply: function (event) {
    this.checkUser();


  }
  ,

  /**
   * 获取活动详细信息
   */
  getActDetail: function (id) {
    var that = this;
    wx.request({
      url: 'http://172.19.208.253:8080/api/activity/' + id,
      success: function (data) {
        that.setData({
          act: data.data.data,
          leftNum: data.data.data.act_user_need - data.data.data.act_enough_user
        })
        wx.setStorageSync('actDetail', data.data.data);
      },
      fail: function () {
        console.log('fail');
      }
    })
  },
  /**
   * 检查用户是否在数据库中
   * 如果成功检索到，就返回
   * 如果没有检索到，就添加到数据库中
   */
  checkUser: function () {
    var userInfo = wx.getStorageSync('userInfo');
    wx.request({
      url: 'http://localhost/api/user/search/' + userInfo.nickName,
      success: function (res) {
        if (res.statusCode != 200) {
          wx.request({
            url: 'http://localhost/api/user',
            header: { "Content-Type": "application/x-www-form-urlencoded"},
            method: "POST",            
            data: {
              nickName: userInfo.nickName,
              openId: userInfo.openId,
              avatarUrl: userInfo.avatarUrl,
              city: userInfo.city,
              country: userInfo.country,
              gender: userInfo.gender,
              province: userInfo.province
            },
            success: function (res) {
              console.log('add user success');
              wx.navigateTo({
                url: '/pages/apply/apply',
              })
            }
          })
        }
        wx.navigateTo({
          url: '/pages/apply/apply',
        })
      },
      fail: function () {

      }
    })
  }
})