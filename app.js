//app.js
App({
  data: {

  },
  onLaunch: function () {
    this.getUser();
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
    * 获取用户数据
    */
  getUser: function () {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({
            success: function (res) {            
              var userInfo = res.userInfo;
              console.log(userInfo);
              wx.setStorageSync('userInfo', userInfo);
              /**
              wx.request({
                url: 'http://172.19.208.253:8080/api/user/onLogin',
                data: {
                  code: code
                },
                success: function (res) {
                  console.log(res)
                  console.log('get openId ok')
                  userInfo.openId = res.data.openid;
                  wx.getStorage({
                    key: 'userInfo',
                    success: function(res) {
                      return 
                    },
                    fail : function () {
                      console.log('set userInfo storage success');
                      wx.setStorageSync('userInfo', userInfo);
                    }
                  })              
                },
                fail : function () {
                  console.log('get userInfo fail');
                }
              })*/
            }
          });
        }
      }
    })
  }
})