// pages/show/show.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser:{},
    allCard:{},
    productcard:{},
    desc:{},
    reviews:[]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      currentUser: app.globalData.userInfo,
    });

    const ProductCard = new wx.BaaS.TableObject('productCard');
    const Reviews = new wx.BaaS.TableObject('review');

    Reviews.find().then((res)=>{
      console.log('reviewTable', res)
    })

  
    //show one event detail
    /*ProductCard.find().then((res) => {
      console.log(res)
      this.setData({
        allCard:res.data.objects
      })
    })*/


   //show one event
    ProductCard.get(options.id).then((res)=>{
      console.log(res);
      this.setData({
        productcard: res.data,
      })
    });

  //pull corresponding reviews
  let query = new wx.BaaS.Query();
  query.compare('product_id', '=', options.id);
  Reviews.setQuery(query).find().then((res)=>{
    console.log('queried object',res)
    this.setData({
      reviews: res.data.objects,
    })
  });


  },

    //create a new comment
  createReview:function(event){
    console.log('create review',event);
    const content = event.detail.value.content;

    let Review = new wx.BaaS.TableObject('review');
    let newReview = Review.create();
    console.log('what is data', this.data)
    const data = {
      product_id: this.data.restaurant.id,
      review: content,
    }
    
    newReview.set(data);
    newReview.save().then((res)=>{
      console.log('save res',res);
      const newReviews = this.data.comments;
      newReviews.push(res.data);

      this.setData({
        comments:newReviews,

      })
    })

    
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