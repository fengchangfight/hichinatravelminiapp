// pages/book/book.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemId: '',
    bookItem: <any>{},
    activeName: '1',
    startdate: 'Start Date',//默认起始时间  
    enddate: 'End Date',//默认结束时间 
  },

  onChange(event: any) {
    this.setData({
      activeName: event.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e: any) {
    this.getBookdetailById(e.id)
    this.setData({
      itemId: e.id
    })
    wx.setNavigationBarTitle({
      title: e.id
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  getBookdetailById(id :string) {
    console.log("fake fetching item detail by id :" + id)
    this.setData({
      bookItem: {
        "title": "Beijing-Shanghai 4 days / Flight + Hotel + Disney ticket",
        "price": 552,
        "imageUrl": "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
        "transportInfo": "This is a sample flight info, you need to replace it with real info"
      }
    })
  },

  bindDateChange(e : any) {
    let that = this;
    console.log(e.detail.value)
    that.setData({
      startdate: e.detail.value,
    })
  },
  bindDateChange2(e: any) {
    let that = this;
    console.log(e.detail.value)
    that.setData({
      enddate: e.detail.value,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  bookNow() {
    console.log("fake booking for "+this.data.itemId)
    wx.navigateTo({
      url: `/pages/payment/payment`,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})