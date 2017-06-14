// pages/detail/apply.js
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
    var data = {
      "Id": 9,
      "ac_user": "yibu",
      "act_title": "狼人杀",
      "act_img": "http://172.19.208.253/huwaihuodong.jpg",
      "act_content": "6月15号进行狼人杀活动 在512 教室",
      "act_location": "北二 512 教室",
      "act_wechat": "yibugele",
      "act_type": "多人桌游",
      "act_rule": "想参加的同学在6月15号准时到513教室。",
      "act_review": 0,
      "act_have_done": 0,
      "act_user_need": 12,
      "act_enough_user": 7,
      "act_time": "2017-6-15 19:00:00"
    };
    wx.request({
      url: 'http://localhost:8888/api/activity',
      method:"GET",
      dataType:"json",
      success:function(data){
        console.log(data);
      }
    })
    this.setData({
      act: data
    })
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
})