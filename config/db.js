 //example
 exports.newsList = {
   result: true,
   totalCount: 10,
   data: [{
         id: 1,
         title: '新闻条目1',
         url: 'http://starcraft.com'
       }, {
         id: 2,
         title: '新闻条目2',
         url: 'http://warcraft.com'
       }, {
         id: 3,
         title: '新闻条3',
         url: 'http://overwatch.com'
       }, {
         id: 3,
         title: '新闻条4',
         url: 'http://hearstone.com'
       }
   ]
 };
exports.boardList = {
  result: true,
  totalCount: 10,
  data: [{
      title: '开放产品',
      description: '开放产品是一款开放产品',
      id: 'car',
      toKey: 'analysis',
      saleout: false
    },
    {
      title: '品牌营销',
      description: '品牌营销帮助你的产品更好地找到定位',
      id: 'earth',
      toKey: 'count',
      saleout: false
    },
    {
      title: '使命必达',
      description: '使命必达快速迭代永远保持最前端的速度',
      id: 'loud',
      toKey: 'forecast',
      saleout: true
    },
    {
      title: '勇攀高峰',
      description: '帮你勇闯高峰，到达事业的顶峰',
      id: 'hill',
      toKey: 'publish',
      saleout: false
    }
  ]
};
exports.productList = {
  result: true,
    totalCount: 10,
    data: {
      pc: {
          id: 1,
          title: 'PC产品',
          last: false,
          list: [{
              id: 11,
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              id: 12,
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              id: 13,
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              id: 14,
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          id: 2,
          title: '手机应用类',
          last: true,
          list: [{
              id: 21,
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              id: 22,
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              id: 23,
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              id: 24,
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
    }
};
exports.slides = {
  result: true,
  totalCount: 10,
  data:[
    {
      id:1,
      src: 'static/solid/1.jpg',
      title: 'title1',
      href: 'detail/analysis'
    },
    {
      id: 2,
      src: 'static/solid/2.jpg',
      title: 'title2',
      href: 'detail/count'
    },
    {
      id: 3,
      src: 'static/solid/3.jpg',
      title: 'title3',
      href: 'http://xxx.xxx.com'
    },
    {
      id: 4,
      src: 'static/solid/4.jpg',
      title: 'title4',
      href: 'detail/forecast'
    }
  ]
};
