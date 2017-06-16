// pages/detail/apply.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    act: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCacheActDetail(this, options.id,'actInfo');
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
    wx.navigateTo({
      url: '/pages/apply/apply',
    })
  }
  ,

  /**
   * 获取活动详细信息
   */
  getActDetail : function (id) {
    var that = this;
    wx.request({
      url: 'http://localhost/api/activity/' + id,
      method: "GET",
      dataType: "json",
      success : function (data) {
        console.log(data.data);
      }
    })
  },
  /**
 * 获取换从中的数据
 * id 是想要获取的数据中的id 
 * key 是想要获取的key
 */
  getCacheActDetail: function (target ,id, key) {
    wx.getStorage({
      key: key,
      success: function (res) {
        var data = res.data.data;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            target.setData({
              act : data[i]
            });
            return ;
          }
        }
      },
      fail: function (res) {
        console.log("get cache fail" + res);
      }

    })
  }
})