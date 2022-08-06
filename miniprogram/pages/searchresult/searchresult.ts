// pages/searchresult/searchresult.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flightListSliced: <any>[],
    pageSize: 10,
    pageNum: 0,
    fullsetflight20:[
      {id: 1, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 2, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 3, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 4, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 5, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 6, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 7, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 8, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 9, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 10, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 11, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 12, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 13, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 14, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 15, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 16, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 17, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 18, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 19, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
      {id: 20, name:"sampleflight", url:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},
    ],
    langopts: [
      { text: 'En', value: 0 },
      { text: '한국인', value: 1 }
    ],
    lang: 0,
    buttons: [
      { id: 1, name: 'Flight', checked: true }, 
      { id: 2, name: 'Tours', checked: false }, 
      { id: 3, name: 'Hotels', checked: false }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: "Shanghai"
   })
   this.getSearchResultByCategory("Flight")
  },

  getFlightSlices(querytext: string){
    console.log("===I'm searching page by page==="+querytext)
    if(this.data.fullsetflight20.length/this.data.pageSize-1<this.data.pageNum){
      console.log("...No more data")
    }else{
      var start = this.data.pageNum*this.data.pageSize
      var end = start+this.data.pageSize
      var sliced = this.data.fullsetflight20.slice( start, end)
      this.setData({
        flightListSliced: [...this.data.flightListSliced, ...sliced]
      })
      if(this.data.fullsetflight20.length/this.data.pageSize-1>=this.data.pageNum){
        this.data.pageNum++
      }
    }
  },
  getSearchResultByCategory(v: string){
    console.log("======")
    console.log(v)
    console.log("-----")
    this.getFlightSlices(v)
  },
  scrolltolower: function() {
    this.getSearchResultByCategory("Flight")
  },
  radioButtonTap: function (e: { currentTarget: { dataset: { id: any } } }) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.buttons[i].checked = true;    
      }
      else {
        //其他的位置为false
      this.data.buttons[i].checked = false;
      }
    }
    this.setData({
    buttons: this.data.buttons
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