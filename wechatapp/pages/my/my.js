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
  },

  _loadData:function(){
    my.getListgrids((data)=>{
      this.setData({
        listgrids: data
      });
    });
    my.getUserInfo((data) => {
      this.setData({
        userInfo: data
      });
    });
  },

  onListTap: function (page) {
    wx.navigateTo({
      url: page
    })
  }
})