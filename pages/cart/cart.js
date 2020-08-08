// pages/restaurant/detail.js
const app = getApp(); // always get data via app

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
    allCard:{},
    productcard:{},
    desc:{},
    reviews:[],
    bookmarks:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // options is just parameter you use for all the results

  const Bookmarks = new wx.BaaS.TableObject('cart');

  // NEW order with EXPAND will go to table & id 
  Bookmarks.expand(['card_id',]).limit(1000).find().then((res) => {
    this.setData({
      bookmarks: res.data.objects,
    })
  });

  

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
