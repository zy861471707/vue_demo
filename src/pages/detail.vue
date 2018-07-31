<template>
    <el-container>
        <el-aside>
            <div class="detail-wrap">
                <div class="detail-left">
                    <div class="product-board">
                        <div class="index-board-img" v-bind:class="'index-board-'+activePath"></div>
                        <ul>
                            <router-link v-for="(item,index) in products" to="" tag="li" 
                            v-bind:class="{'active':activePath === item.path}" v-bind:key="index" v-on:click.native="changeMenu(item)">
                                {{ item.name }}
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </el-aside>
        <el-main>
            <div class="detail-right">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data(){
        return {
            activePath:'',
            products:[
                {
                    name: '数据统计',
                    path: 'count'
                },
                {
                    name: '数据预测',
                    path: 'forecast'
                },
                {
                    name: '流量分析',
                    path: 'analysis'
                },
                {
                    name: '广告发布',
                    path: 'publish'
                }
            ]
        }
    },
    methods:{
        changeMenu(param){
            console.log(param)
            this.activePath = param.path;
            this.$router.push({path: `/detail/${param.path}`,query: {type: this.activePath}});
        }
    },
    created(){
        this.activePath = this.$route.query.type;
        this.$router.push({path: `/detail/${this.$route.query.type}`,query: {type: this.activePath}});
    }
}
</script>
<style>
.detail-wrap {
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  width: 100%;
}
.detail-right {
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.index-board-img {
    height: 100px;
    width: 100%;
}
.index-board-analysis{
  background: url(../assets/1.png) no-repeat;
  background-position: center;
}
.index-board-count{
  background: url(../assets/2.png) no-repeat;
  background-position: center;
}
.index-board-forecast{
  background: url(../assets/3.png) no-repeat;
  background-position: center;
}
.index-board-publish{
  background: url(../assets/4.png) no-repeat;
  background-position: center;
}
.sales-board {
  background: #fff;
}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}

.el-aside {
    max-width: 200px;
}
</style>

