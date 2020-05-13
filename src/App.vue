<template>
  <div id="app">
    <Reviews msg="Барселона - обзор города" :users="users"/>
    <Chat/>
  </div>
</template>

<script>
import Reviews from './components/Reviews.vue'
import Chat from './components/Chat.vue'

export default {
  name: 'App',
  components: {
    Reviews,
    Chat
  },
  data(){
    return {
      users: [
        {
          id: 0,
          img: './Oval.png',
          name:'Наталия Полянская',
          text:'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
          gallery: [
            './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png'
          ],
          like: 6,
        },
        {
          id: 1,
          img: './Oval.png',
          name:'Elena Bulgakova',
          text:'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
          gallery: [
            './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png'
          ],
          like: 0,
        },
        {
          id: 2,
          img: './Oval.png',
          name:'Наталия Полянская',
          text:'Барселона – моя третья любовь, после Вены и Кр Это город, в который я каждый возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотре',
          gallery: [
            './1.jpg', './2.jpg', './3.jpg', './4.jpg', './5.jpg', './6.jpg', './7.jpg', './8.jpg'
          ],
          like: 3,
        },
        {
          id: 3,
          img: './Oval.png',
          name:'Elena Bulgakova',
          text:'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
          gallery: [
            './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png', './IMG_2299.png', './IMG_2675.png', './IMG_2388.png'
          ],
          like: 9,
        },
      ]
    };
  },
}
</script>

<style>
  button, 
  button:active, 
  button:focus {
      outline: none;
  }

  html, body {
    scrollbar-color: #FF4641 inherit;     /* «цвет ползунка» «цвет полосы скроллбара» */
    scrollbar-width: thin;                /* толщина */
  }

  /* полоса прокрутки (скроллбар) */
  ::-webkit-scrollbar {
    width:  4px;  /*  ширина для вертикального скролла */
    /*height: 111px;  высота для горизонтального скролла */
    background-color: inherit;
  }

  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    background-color: #FF4641;
    /*border-radius: 9em;*/
    /*box-shadow: inset 1px 1px 10px #f3faf7;*/
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    background: #F9F7F2;
    padding-top: 110px;
  }

  .title_heate{
    font-family: KievitPro-Bold;
    font-size: 29px;
    font-style: bold;
    color: #000000;
  }

  .slide_avatar{
    width: 30px !important;
    height: 30px;
  }
</style>
