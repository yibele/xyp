//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    this.getUserInfo();
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          that.getUserLoginInfo(res, cb);
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  /**
   * 设置缓存信息
   * key 缓存的key
   * cache 需要缓存的data
   */
  setCache: function (key, cache) {
    var that = this;
    wx.setStorage({
      key: key,
      data: cache,
      success: function () {
        console.log("set " + key + " storage success");
      },
      fail: function () {
        console.log('set' + key + "storate fail");
      }
    });
  },
  /**
  * 获取缓存
  */
  getCache: function (key) {
    var that = this;
    wx.getStorage({
      key: key,
      success: function (res) {
        return res.data
      },
    })
  },
  /**
   * 获取用户登录状态
   * openId
   * session_key
   */
  getUserLoginInfo: function (res) {
    var that = this
    if (res.code) {
      wx.request({
        url: "http://localhost/api/user/onLogin",
        data: {
          code: res.code
        },
        success: function (res, cb) {
          var openId = res.data.openid;
          var session_key = res.data.session_key;
          wx.setStorageSync('openId', openId);
          wx.setStorageSync('session_key', session_key);
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })

        },
        fail: function () {
          console.log("request fail");
        }
      })
    } else {
      console.log("获取用户登录状态失败" + res.errMsg);
    }
  }

})