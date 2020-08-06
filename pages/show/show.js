// pages/show/show.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
    productcard:{},
    desc:{},

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });

    const ProductCard = new wx.BaaS.TableObject('productCard');
    const Index = new wx.BaaS.TableObject('Index');
    ProductCard.find().then((res) => {
      console.log(res)
      this.setData({
        productcard:res.data.objects
      })
    })


   /* //show one event
    ProductCard.get(options.id).then((res)=>{
      console.log(res);
      this.setData({
        productcard: res,
      })
    });*/

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})