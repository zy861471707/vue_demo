<template>
  <div class="slide-show" v-on:mouseover="clearInvSlide()" v-on:mouseout="runInvSlide()">
    <div class="slide-img">
      <a>
        <transition name="slide-trans">
          <img v-if="isShow" v-bind:src="slides[activeIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" v-bind:src="slides[activeIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{slides[activeIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goImgIndex(preceIndex)">&lt;</li>
      <li v-for="(item,index) in slides" v-bind:key="item.id" v-on:click="goImgIndex(index)">
        <a v-bind:class="{on:index === activeIndex}">{{index+1}}</a>
      </li>
      <li @click="goImgIndex(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    slides: {
      type: Array,
      default() {
        return []
      }
    },
    invTime:{
      type:Number,
      default(){
        return 1000
      }
    }
  },
  created() {
    console.log(3,this.slides);
    this.runInvSlide();
  },
  data () {
      return {
        activeIndex: 0,
        isShow:true
      }
  },
  methods:{
    //跳转对应index
    goImgIndex(index){
      this.isShow = false;
      setTimeout(()=>{
        this.isShow = true;
        this.activeIndex = index;
      },100)
    },
    //自动切换
    runInvSlide(){
      this.invName = setInterval(()=>{
        this.goImgIndex(this.nextIndex);
      },this.invTime)
    },
    //取消切换
    clearInvSlide(){
      clearInterval(this.invName)
    }
  },
  computed:{
    //上一页计算属性
    preceIndex(){
      if(this.activeIndex === 0){
        return this.slides.length - 1;
      }else{
        return this.activeIndex - 1;
      }
    },
    //下一页计算属性
    nextIndex(){
      if(this.activeIndex === this.slides.length - 1){
        return 0;
      }else{
        return this.activeIndex + 1;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
  user-select: none;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  line-height: 30px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  color:#f8ad17;
}
</style>
