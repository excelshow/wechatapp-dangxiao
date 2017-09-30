var WxParse = require('../../../libs/wxParse/wxParse.js');

import { News } from "../news-model.js";
var news = new News;

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
    this.data.id = options.id;
    this.data.title = options.title;
    this._loadData();
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
  },
  onBackTap: function () {
    wx.navigateBack();
  },
  _loadData: function () {
    news.getNewsById(this.data.id, (data) => {
      this.setData({
        news: data
      });
      var article = this.data.news.news_content.content;
      WxParse.wxParse('article', 'html', article, this, 0);
    });
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '党性教育微信课堂',
      path: "/pages/news/news-detail/news-detail?id=" + this.data.id + "&title=" + this.data.title,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})