// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    account: '',
    password: '',
  },
  handleInput(event) {
    this.setData({
      account: event.detail.value
    });
  },
  handlePasswordInput(event) {
    this.setData({
      password: event.detail.value
    });
  },
  handleLogin() {
    const { account, password } = this.data;
    // 根据账号和密码判断跳转的端口
    if (account === 'user' && password === '123456') {
      wx.navigateToMiniProgram({
        appId: 'wxfb233f121bba7717', // 需要跳转到指定的小程序appid
        path: '/pages/list/list',   // 打开的页面
        envVersion: 'trial',
        success(res) {
         // 打开成功
         console.log(res);
        }
       })
    } else if (account === 'chef' && password === '123456') {
      wx.navigateToMiniProgram({
        appId: 'wxfb233f121bba7717', // 需要跳转到指定的小程序appid
        path: '/pages/list/list',   // 打开的页面
        envVersion: 'trial',
        success(res) {
         // 打开成功
         console.log(res);
        }
       })
    } else if (account === 'admin' && password === '123456') {
      wx.switchTab({
        url: '/pages/manage/manage', // 管理端页面路径
      });
    } else {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'none',
      });
    }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
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
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
