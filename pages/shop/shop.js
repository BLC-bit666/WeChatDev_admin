// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ingredientBlocks: [
      {
        id: 1,
        blockTitle: '蔬菜类',
        ingredients: [
          { id: 1, name: '青菜', price: 5, availability: true, image: './images/青菜.png' },
          { id: 2, name: '胡萝卜', price: 3, availability: true, image: './images/胡萝卜.png' },
          { id: 3, name: '韭菜', price: 8, availability: true, image: './images/韭菜.png' },
          { id: 4, name: '金针菇', price: 15, availability: false, image: './images/金针菇.png' },
          // 其他蔬菜类食材...
        ]
      },
      {
        id: 2,
        blockTitle: '肉类',
        ingredients: [
          { id: 5, name: '猪肉', price: 30, availability: false, image: './images/猪肉-01.png' },
          { id: 6, name: '牛肉', price: 50, availability: false, image: './images/生鲜-牛肉.png' },
          { id: 7, name: '鸡肉', price: 15, availability: true, image: './images/鸡肉.png' },
          { id: 8, name: '扇贝', price: 90, availability: true, image: './images/扇贝-01.png' },
          // 其他肉类食材...
        ]
      },
      // 其他食材分块...
    ]
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