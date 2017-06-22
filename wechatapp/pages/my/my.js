var myPageData = require("../../data/my-page-data.js");
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listgrids: myPageData.listgrids
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onListTap: function (page) {
    wx.redirectTo({
      url: page
    })
  }
})