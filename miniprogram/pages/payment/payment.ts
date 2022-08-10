// pages/payment/payment.ts

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedPay: '1',
    minDate: new Date().getTime(),
    maxDate: new Date(2099, 10, 1).getTime(),
    travelers: <any>[],
  },
  deleteTraveler(e:any){
    var idx = e.currentTarget.dataset.index; 
    console.log("===delete id:"+idx)
    this.data.travelers.splice(idx, 1)
    this.setData({
      travelers: this.data.travelers
    })
  },
  changeTranvelerNameInList(e: any){
    var idx = e.currentTarget.dataset.index; 
    this.data.travelers[idx].name = e.detail
    this.setData({
      travelers: this.data.travelers
    })
  },
  changeTranvelerPassportnoInList(e: any){
    var idx = e.currentTarget.dataset.index; 
    this.data.travelers[idx].passportno = e.detail
    this.setData({
      travelers: this.data.travelers
    })
  },
  bindBirthDateChange: function(e: any) {
    var idx = e.currentTarget.dataset.index
    console.log("birthdate index: "+idx)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.data.travelers[idx].birthdate = e.detail.value
    this.setData({
      travelers: this.data.travelers
    })
  },
  bindPassportValidDateChange: function(e: any) {
    var idx = e.currentTarget.dataset.index
    console.log("passport valid date index: "+idx)
    this.data.travelers[idx].passportvaliddate = e.detail.value
    this.setData({
      travelers: this.data.travelers
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.initCurDate()
    this.initFirstTraveler()
  },
  initFirstTraveler(){
    var tra ={
      "name": '',
      "passportno": '',
      "birthdate": '',
      "passportvaliddate": ''
    }
    this.setData({
      travelers: this.data.travelers.concat(tra)
    })
  },
  addMoreTravelers(){
    console.log("===clicked button")
    var tra ={
      "name": '',
      "passportno": '',
      "birthdate": '',
      "passportvaliddate": ''
    }
    this.setData({
      travelers: this.data.travelers.concat(tra)
    })
  },
  initCurDate(){
    var date = new Date(); //返回当前时间对象
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    this.setData({
      birthDate: [year, month, day].join('-')
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

  },
  selectPay(e: any){
    this.setData({
      selectedPay: e.detail,
    });
    console.log(this.data.selectedPay)
  }
})