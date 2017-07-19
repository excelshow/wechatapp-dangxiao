import { News } from "../news-model.js";
var news = new News;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lodingHidden: false,
    fullHidden: true,
    current_page: 1,
    size: 10,
    NewsListArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.data.title = options.title;
    this._loadData(this.data.current_page);
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    });
  },

  _loadData: function (current_page) {
    this.setData({
      lodingHidden: false
    });
    var current_data = this.data.NewsListArr;
    console.log(current_data);
    news.getNewsList({ id: this.data.id, page: current_page, size: this.data.size }, (data, current_page) => {
      if (data.length == 0){
        this.setData({
          lodingHidden: true,
          fullHidden: false
        });        
      }else{
        for (let i = 0; i < data.length;i++){
          current_data.push(data[i]);
        }
        this.setData({
          current_page: current_page,
          NewsListArr: current_data,
          lodingHidden: true
        });
      }
    });
  },

  onNewsTap: function (event) {
    var id = news.getDataSet(event, "id");
    var title = news.getDataSet(event, "title");
    wx.navigateTo({
      url: "/pages/news/news-detail/news-detail?id=" + id + "&title=" + title
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //判断是否正在加载
    if (!this.data.lodingHidden || !this.data.fullHidden) { return false; }
    this._loadData(this.data.current_page+1);
  }
})