//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('9d9042e3aaaf5ab6d65c', {autoLogin: true})
    wx.BaaS.auth.getCurrentUser().then(user => {
      // 登录成功
      // this app which is the page
      // toJSON is a API to convert the super user to JSON object type which is normally used
      // no need to use get method to geth the points
      // console.log('logged in from app.js', user)
      this.globalData.userInfo = user.toJSON();
      wx.setStorageSync('userInfo', user.toJSON())
    }, err => {
      // 登录失败
      console.log('fail login')
    })
  },
  globalData: {
    userInfo: null
  }
})