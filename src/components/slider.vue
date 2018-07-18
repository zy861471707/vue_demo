<template>
  <div class="slide-show">
    <div class="slide-img">
      <a>
        <img v-bind:src="slides[activeIndex].src">
      </a>
    </div>
    <h2>{{slides[activeIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goImgIndex(preceIndex)">&lt;</li>
      <li v-for="(item,index) in slides" v-bind:key="item.id" v-on:click="goImgIndex(index)">
        <a>{{index+1}}</a>
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
    }
  },
  created() {
    console.log(3,this.slides);
  },
  data () {
      return {
        activeIndex: 0
      }
  },
  methods:{
    goImgIndex(index){
      this.activeIndex = index;
    }
  },
  computed:{
    preceIndex(){
      if(this.activeIndex === 0){
        return this.slides.length - 1;
      }else{
        return this.activeIndex - 1;
      }
    },
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
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
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
  text-decoration: underline;
}
</style>
