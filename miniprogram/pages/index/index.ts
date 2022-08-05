// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const APP = getApp()
const WXAPI = require('apifm-wxapi')
WXAPI.init('gooking')
type ImageCardType = {
  id: number;
  name: string;
  url: string;
}
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    activeCategory: 1,
    buttons: [{ id: 1, name: 'Flight', checked: true }, { id: 2, name: 'Tours', checked: false }, { id: 3, name: 'Hotels', checked: false }],
    langopts: [
      { text: 'En', value: 0 },
      { text: '한국인', value: 1 }
    ],
    lang: 0,
    pageSize: 10,
    pageNum: 0,
    flightListSliced: <any>[],
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
    ]

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  // onReachBottom() {
  //   this.getFlightSlices()
  //   console.log("===bottom reached")
  // },
  scrolltolower(){
    this.getFlightSlices()
    console.log("===bottom reached")
  },
  getFlightSlices(){
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
  onLoad() {
    this.getFlightSlices()
    this.initBanners()
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
      this.setData({
        navHeight: APP.globalData.navHeight,
        navTop: APP.globalData.navTop,
        windowHeight: APP.globalData.windowHeight,
        menuButtonObject: APP.globalData.menuButtonObject //小程序胶囊信息
      })
    }
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
  async initBanners(){
    WXAPI.banners().then((res: { code: number; data: any }) => {
      console.log(res.code)
      if (res.code == 0) {
        console.log(res.data)
        this.setData({
          banners: res.data
        })
      }
    })
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
