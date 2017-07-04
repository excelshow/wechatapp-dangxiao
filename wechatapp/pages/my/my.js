import { My } from "my-model.js";
var my = new My;
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
    this._login();
  },

  _loadData:function(){
    my.getListgrids((data)=>{
      this.setData({
        listgrids: data
      });
    });
  },

  onListTap: function (page) {
    wx.navigateTo({
      url: page
    })
  },

  _login:function(){
    wx.login({
      success: (res) => {
        var code = res.code;
        if (code) {
          wx.getUserInfo({
            success: (res) => {
              var userInfo = res.userInfo;
              this.setData({
                userInfo: userInfo
              });
            }
          });
        } else {
           console.log('获取用户登录态失败！' + res.errMsg);
        }
      }
    });
  }
})