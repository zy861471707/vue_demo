<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="product in productList" :key="product.id">
            <h3>{{product.title}}</h3>
            <ul v-for="item in product.list" :key="item.id">
                <a v-bind:href="item.url">{{item.name}}</a>
            </ul>
            <div v-if="!product.last" class="hr"></div>
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,index) in newList" :key= "index">
            <a v-bind:href="item.url" class="new-item">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slider-show v-if="slides.length" :slides="slides" :invTime="time"></slider-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList" :key="item.id" v-bind:class="[{'line-last' : index % 2 !== 0},'index-board-'+item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <!-- <a class="button">立即购买</a> -->
              <router-link tag="a" class="button" :to="{ name: 'DetailPage', params: { type: index+1 }}">
                立即购买
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SliderShow from '../components/slider';
    export default {
      components:{
        SliderShow
      },
      created() {
        this.http.post("api/getNewsList").then(d => {
          if(d && d.data.result){
            // console.log(d.data);
            this.newList = d.data.data;
          }
        });
        this.http.post("api/getBoardList").then(d => {
          if(d && d.data.result){
            // console.log(d.data);
            this.boardList = d.data.data;
          }
        });
        this.http.post("api/getProductList").then(d => {
          if(d && d.data.result){
            // console.log(d.data);
            this.productList = d.data.data;
          }
        });
        this.http.post("api/getSliderList").then(d => {
          if(d && d.data.result){
            console.log(1 , d.data);
            this.slides = d.data.data;
          }
        });
      },
      data(){
          return {
              boardList: [],
              newList:[],
              productList: {},
              show: false,
              slides: [],
              time:2000
          }
      }
    }
</script>
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>