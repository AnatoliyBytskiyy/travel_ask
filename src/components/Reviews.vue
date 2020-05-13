<template>
  <div class="container">
    <div class="d-flex justify-content-center slider_title">
      <div>
        <img class="img_barselona" alt="Barcelona Spain" src="../assets/img/barcelona_spain.png"/>
      </div>
      <div class="title d-flex align-items-center">
        <div id="hello">
          <h1 class="title_heate">{{ msg }}</h1>
          <p class="text_heate">Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</p>
          <a href="#" class="bottom_line">Читать дальше</a>
        </div>
      </div>
    </div>
    <div class="slider">
      <h1 class="title_heate">Отзывы о барселоне</h1>
      <carousel :autoplay="true" :dots="true" :nav="false" :items="3" :margin="20" :loop="true" :mouseDrag="true" :touchDrag="true" :autoplayHoverPause="true">
        <div v-for="user in users" v-bind:key="user['user']" class="item d-flex flex-column">
          <div class="d-flex align-items-center user_inf">
            <img :src="user.img" class="slide_avatar">
            <p class="slide_name">{{user.name}}</p>
          </div>
          <div>
            <p><span class="accent">Барселона</span> &#8212; О ГОРОДЕ:</p>
            <p class="slider_txt">Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...</p>
          </div>
          <div class="d-flex slide_item">
            <div v-for="(img, index) in user.gallery" v-bind:key="img" v-show="index < 4" v-on:click.prevent="show(user.id, index)" class="w-full">
              <img class="w-64 gallery_img" :src="img">
              <div v-if="index == 3" class="img_last d-flex align-items-center justify-content-center">+{{ user.gallery.length-4 }}</div>
            </div>
          </div>
          <div class="d-flex justify-content-between slider_footer">
            <p class="item_footer">около 1 года назад </p> &nbsp;&nbsp; <p class="item_footer">&#183; 9 комментариев</p> <div class="d-flex"><button class="like" v-on:click="like(user.id)">&nbsp;{{user.like}}</button></div>
          </div>
        </div>
      </carousel>
      <button class="all_reviews">Все отзывы</button>
    </div>
    <div>
      <div class="lightbox fixed pin z-50 flex justify-center items-center" v-if="visible" v-on:click.stop="hide">
        <div class="fixed pin-r pin-t text-white cursor-pointer text-4xl p-1 mr-2" style="font-size: 30px;" v-on:click.stop="hide">&times;</div>
        <div class="d-flex justify-content-between align-items-center" style="height: 100%;">
          <div class="cursor-pointer self-center px-8"
             v-on:click.stop="prev"
             :class="{'invisible': ! hasPrev()}">
            <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                <path d="M0-.5h24v24H0z" fill="none"/>
            </svg>
          </div>
          <div class="lightbox-image" v-on:click.stop="">
            <img :src="users[id].gallery[index]">
            <!-- <img :src="images[index]"> -->
          </div>
          <div class="cursor-pointer self-center px-8"
             v-on:click.stop="next"
             :class="{'invisible': ! hasNext()}">
            <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  // name: 'Reviews',
  props: {
    msg: String,
    users: {
      type: Array,
      default: () => [],
    },
  },
  components: { 
    carousel
  },
  data() {
    return {
      visible: false,
      index: 0,
      id: 0,
    };
  },
  methods: {
    show(id = 0, i = 0) {
      this.visible = true;
      this.id   = id;
      this.index   = i;
    },
    hide() {
      this.visible = false;
      this.index   = 0;
      this.id      = 0;
    },
    hasNext() {
      // return this.index + 1 < this.images.length;
      let length = this.users[this.id].gallery[this.index].length;
      return this.index < length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    like(id){
      this.users[id].like++;
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
              this.next();
              break;
          case 'ArrowLeft':
              this.prev();
              break;
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
              e.preventDefault();
              break;
          case 'Escape':
              this.hide();
              break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeydown)
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button, 
  button:active, 
  button:focus {
      outline: none;
  }

  .slider_title{
    margin-bottom: 20px;  
    background: #FFF;
  }

  .img_barselona{
    width: 440px;
    height: 440px;
  }

  .text_heate{
    font-family: KievitPro-Light;
    font-size: 17px;
    color: #000000;
  }

  .bottom_line{
    color: #FF4641;
    text-decoration: none;
    border-bottom: 2px solid #FF4641;
  }

  .title{
    margin-left: 29px;
  }

  .slider{
    /*margin: 35px 31px;*/
    margin-top: 20px;
    padding-top: 35px;
    padding-bottom: 50px;
    padding-left: 31px;
    background: #FFF;
  }

  .item{
    background-color: #F9F7F2;
    width: 300px;
    height: 410px;
    padding: 19px 26px;
  }

  .slide_name{
    font-family: KievitPro;
    font-size: 15px;
    margin-bottom: 0px !important;
    margin-left: 10px;
  }

  .accent{
    color: #FC4F1E;
  }

  .slider_txt{
    width: 272px;
    height: 177px;
  }

  .user_inf{
    margin-bottom: 30px;
  }

  .slide_item > .w-full{
    position: relative;
    margin-right: 5px;
  }

  .lightbox {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    /*margin-top: 25vh;*/
    z-index: 9999;
  }

  .lightbox-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 90px);
  }

  .img_last{
    position: absolute;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    top: 0;   
    color: #fff;
  }

  .like {
    background: url(../assets/img/like.png) no-repeat center left;
    width: 40px;
    height: 25px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: #9D9D9D;
    border: none;
    /*margin-bottom: 5px;*/
  }

  .item_footer {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #9D9D9D;
    margin: 0px;
    padding-top: 5px;
  }

  .slider_footer {
    margin-top: 15px;
  }

  .all_reviews{
    border: 2px solid #FF4641;
    box-sizing: border-box;
    border-radius: 2px;
    color: #212121;
    font-family: KievitPro;
    font-size: 15px;
    line-height: 17px;
    width: 124px;
    height: 40px;
    /*background: #FFF;*/
    background-image: none; 
    background: transparent;
    background-color: transparent;
    position: absolute;
    z-index: 99;
    margin-top: -25px;    
  }

  .gallery_img{
    width: 50px;
    height: 50px;
  }
</style>