// pages/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'chef', // 初始状态为未支付
    chefList: [
      { id: 1,avatarUrl:'./images/飞船.png', name: '厨师1', specialty: '鲁菜',status:'正在营业' },
      { id: 2,avatarUrl:'./images/cat.png', name: '厨师2', specialty: '川菜',status:'正在营业' },
      { id: 3,avatarUrl:'./images/卡通手表.png', name: '厨师3', specialty: '粤菜',status:'暂停营业' },
      { id: 4,avatarUrl:'./images/婴儿枕头.png', name: '厨师4', specialty: '苏菜',status:'暂停营业' },
      { id: 5,avatarUrl:'./images/小鸡 动物 鸟.png', name: '厨师5', specialty: '闽菜',status:'正在营业' },
      { id: 6,avatarUrl:'./images/万圣节.png', name: '厨师6', specialty: '浙菜',status:'正在营业' },
      { id: 7,avatarUrl:'./images/卡通头像.png', name: '厨师7', specialty: '湘菜',status:'正在营业' },
      { id: 8,avatarUrl:'./images/卡通形象.png', name: '厨师8', specialty: '徽菜',status:'正在营业' },
      // 其他厨师数据...
    ],
    ingredientList: [
      { id: 1, name: '土豆', quantity: 100, expiryDate: '2023-12-31' },
      { id: 2, name: '鸡胸肉', quantity: 50, expiryDate: '2023-11-30' },
      { id: 3, name: '牛肉', quantity: 70, expiryDate: '2024-1-12' },
      { id: 4, name: '猪肉', quantity: 500, expiryDate: '2023-12-10' },
      { id: 5, name: '金针菇', quantity: 5, expiryDate: '2024-4-15' },
      { id: 6, name: '香菜', quantity: 10, expiryDate: '2023-12-31' },
      { id: 7, name: '芹菜', quantity: 30, expiryDate: '2024-3-31' },
      { id: 8, name: '韭菜', quantity: 40, expiryDate: '2024-6-31' },
      // 其他食材数据...
    ],
    orderList: [
      { id: 202306181200, customer: '小吃货', chef: '张三', meal: '008', amount: 50, completionTime: '2023-06-21 18:30' },
      { id: 202306181245, customer: '牛爷爷', chef: '李四', meal: '019', amount: 108, completionTime: '2023-06-22 12:00' },
      { id: 202306181256, customer: '胡图图', chef: '王五', meal: '107', amount: 88, completionTime: '2023-06-23 1:00' },
      { id: 202306181308, customer: '灰太狼', chef: '赵六', meal: '045', amount: 188, completionTime: '2023-06-24 9:00' },
      { id: 202306181545, customer: '超人强', chef: '田七', meal: '097', amount: 288, completionTime: '2023-06-25 18:00' },
      // 其他订单数据...
    ],
    userList: [
      { id: 1, avatarUrl: './images/cat.png', account: '19863689765', credit: 80, appointment: true },
      { id: 2, avatarUrl: './images/万圣节.png', account: '15395571234', credit: 90, appointment: true },
      { id: 3, avatarUrl: './images/卡通头像.png', account: '18746893568', credit: 70, appointment: false },
      { id: 4, avatarUrl: './images/卡通形象.png', account: '15245678453', credit: 90, appointment: true },
      { id: 5, avatarUrl: './images/卡通手表.png', account: '18524534423', credit: 60, appointment: true },
      { id: 6, avatarUrl: './images/头像 男孩.png', account: '15632423411', credit: 95, appointment: false },
      { id: 7, avatarUrl: './images//婴儿枕头.png', account: '15867856778', credit: 50, appointment: true },
      { id: 8, avatarUrl: './images/小鸡 动物 鸟.png', account: '18456456756', credit: 80, appointment: true },
      { id: 9, avatarUrl: './images/青蛙 动物 卡通 可爱.png', account: '18345345667', credit: 80, appointment: true },
      { id: 10, avatarUrl: './images/飞船.png', account: '15567657569', credit: 90, appointment: false },
      // 其他用户数据...
    ]
  },
  navigateToChefDetail(e) {
    const chefId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/chef/detail?id=${chefId}`
    });
  },
	switchTab(event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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