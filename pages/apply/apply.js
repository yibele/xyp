// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour: '00' + ':',
    min: '00' + ':',
    s: '00',
    //不知道是bug还什么，传过来的时间需要时用时间戳的形式,new Date()无法使用
    time: '',
    t: '00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var actDetail = wx.getStorageSync('actDetail');
    var act_id = actDetail.id;
    var userInfo = wx.getStorageSync('userInfo');
    var nickName = userInfo.nickName;


    wx.request({
      url: 'http://localhost/api/user/userAddAct',
      data: {
        nickName : nickName,
        actid : act_id
      },
      success: function (res) {
       console.log(res);
      }
    })

    //设置结束时间 因为结束时间需要用到时间戳， 所以获取时间戳
    var time = Date.parse(new Date(actDetail.act_time));
    var NowTime = Date.now();
    console.log(time);
    console.log(options);

    var timestamp = time - NowTime;

    this.setData({
      t: timestamp
    });
    setInterval(this.timer, 1000);
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
   * 倒计时
   */
  timer: function () {
    var t = this.data.t - 1000;
    var h = Math.floor(t / 1000 / 60 / 60 / 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var second = Math.floor(t / 1000 % 60);
    this.setData({
      hour: (h>=10?h:'0'+h)+":",
      min: (m>=10?m:'0'+m)+":",
      s: (second>=10?second:'0'+second),
      t: t
    });
  },
  /**
   * 转到活动详情页面
   */
  toDetailPage: function (e) {
    var act = wx.getStorageSync('actDetail');
    var act_id = act.id;
    var userInfo = wx.getStorageSync('userInfo');
    var user_id = userInfo.id;

    wx.request({
      url: 'http://localhost/api/user/'+user_id+'/'+act_id,
      success: function(res) {
        console.log
        wx.navigateTo({
          url: '../detail/detail?id=' + act_id
        });
      }
    })
  }
})