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
  _loadData: function () {
    news.getNewsById(this.data.id,(data)=>{
      this.setData({
        news: data
      });
      var article = this.data.news.news_content.content;
      WxParse.wxParse('article', 'html', article, this, 0);
    });
  }
})