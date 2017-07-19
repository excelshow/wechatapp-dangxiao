import { User } from 'user-model.js';
var user = new User();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:''
  },
  onLoad: function(){
    this._loadData();
  },
  _loadData: function(){
    wx.showLoading({
      title: '加载中',
    })
    user.getUserinfo((data)=>{
      this.setData({
        userinfo: data
      });
      wx.hideLoading();
    });
  },
  createOrUpdateAddress: function (e) {
    wx.showLoading({
      title: '提交中',
    })
    var data = e.detail.value;
    user.createOrUpdateAddress(data);
  },
})