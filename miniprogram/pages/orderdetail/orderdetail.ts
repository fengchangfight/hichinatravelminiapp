// pages/orderdetail/orderdetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e: any) {
    this.getOrderDetailById(e.id)
  },

  getOrderDetailById(id: string){
    // fake fetching
    var orderDetail = {
      'title': '4 days self travel to Shanghai',
      'price': '552',
      'date': '2019-12-30',
      'orderNum': '123456789',
      'contact': 'William',
      'tel': '13333333333',
      'remark': 'some description',
      'status': 'Completed'
    }
    this.setData({
      orderDetail: orderDetail
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