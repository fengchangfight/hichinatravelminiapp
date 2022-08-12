// pages/myorder/myorder.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrders:<any>[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: "My Order"
   })
   this.getMyOrders()
  },

  deleteOrder(e: any){
    var idx = e.currentTarget.dataset.index; 
    console.log("===deleting id: "+ idx)
  },
  goOrderDetails(e: any){
    var idx = e.currentTarget.dataset.index; 
    console.log("===go details for id: "+ idx)
    wx.navigateTo({
      url: `/pages/orderdetail/orderdetail?id=${idx}`,
    })
  },
  getMyOrders(){
    // this is sample data, on production, replace it with real data
    var fakeOrders = [
      {
        "id": '1',
        "title": "4 days self travel with round trip flights of Shanggri-la Yunnan",
        "status": "Complete",
        "price": '552',
        "date": '2019-12-30',
      },
      {
        "id": '2',
        "title": "3 days self travel Inner mongolia",
        "status": "Complete",
        "price": '442',
        "date": '2020-12-30',
      }
    ]
    this.setData({
      myOrders: fakeOrders
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})