<template>
  <div class="container">
    <div class="chat d-flex">
      <div class="abonent">
        <h1 class="title_heate">Чат с пользователем</h1>
        <div class="chat_window">
          <div class="user_blok d-flex">
            <div class="user_img">
              <img src="../assets/img/Oval.png">
            </div>
            <div style="width: 100%;">
              <h2 class="user_name">Наталия Полянская</h2>
              <div class="d-flex align-items-center">
                <img src="../assets/img/flag.png" class="flag">
                <p class="user_position">Гид по Баварии, фотограф</p>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-end star">
              <img src="../assets/img/Star.png">
              <img src="../assets/img/Star.png">
              <img src="../assets/img/Star.png">
              <img src="../assets/img/Star.png">
              <img src="../assets/img/Star empty.png" class="star">
            </div>
          </div>
          <div id="user_chat" class="user_chat">
            <div v-for="mass in massages" v-bind:key="mass" style="flex: 1;" class="msg_block">
              <div class="massage d-flex" v-once v-bind:style="{ background: isActive }">
                <div>
                  <img v-once :src="ava" class="slide_avatar">
                </div>
                <div>
                  <p>{{ mass }}</p>
                  <span v-once class="data">{{time}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="user_blok d-flex justify-content-beetwen align-items-center brd_top">
            <div class="user_img">
              <img src="../assets/img/Ovall.png">
            </div>
            <div class="input">
              <input id="userInput" v-once v-on:keyup.enter="sendMassage('user' ,massage)" v-model="massage" type="text" name="user_massage" placeholder="Напишите сообщение...">
            </div>
            <div>
              <button type="submit" class="send" v-on:click="sendMassage('user' ,massage)"></button>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 50%">
        <h1 class="title_heate">Чат с администратором</h1>
        <div class="chat_window">
          <div class="user_blok d-flex">
            <div class="user_img">
              <img src="../assets/img/Oval.png">
            </div>
            <div>
              <h2 class="user_name">Администратор</h2>
              <div class="d-flex align-items-center">
                <img src="../assets/img/flag.png" class="flag">
                <p class="user_position">TravelAsk</p>
              </div>
            </div>
          </div>
          <div id="admin_chat" class="user_chat">
            <!-- <div class="msg_wrapp"> -->
              <div v-for="mass in massages" v-bind:key="mass" style="flex: 1;">
                <div class="massage d-flex" v-once v-bind:style="{ background: isActive }">
                  <div>
                    <img v-once :src="ava" class="slide_avatar">
                  </div>
                  <div>
                    <p>{{ mass }}</p>
                    <span v-once class="data">{{time}}</span>
                  </div>
                </div>
              </div>
            <!-- </div> -->
          </div>
          <div class="user_blok d-flex justify-content-beetwen align-items-center brd_top">
            <div class="user_img">
              <img src="../assets/img/Ovall.png">
            </div>
            <div class="input">
              <input id="adminInput" v-once v-on:keyup.enter="sendMassage('admin' ,massage)" v-model="massage" type="text" name="user_massage" placeholder="Напишите сообщение...">
            </div>
            <div>
              <button type="submit" class="send" v-on:click="sendMassage('admin' ,massage)"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isActive: 'inherit',
      massage: '',
      massages: [],
      ava: '',
      time: '00.00.0000 00:00'
    };
  },
  methods: {
    sendMassage(user, massage){
      if(massage == ''){
        return;
      }

      var date = new Date();

      this.massages.push(massage);
      this.massage = '';
      this.time = date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() ;

      if(user == 'admin'){
        this.ava = "./Oval.png";
        this.isActive = "inherit";
        document.getElementById("adminInput").value = "";
      }else{
        this.ava = "./Ovall.png";
        this.isActive = '#F9F7F2';
        document.getElementById("userInput").value = "";
      }
    }
  }
};
</script>

<style scoped>
  button, 
  button:active, 
  button:focus {
      outline: none;
  }

/*  html, body {
    scrollbar-color: #FF4641 inherit;     
    scrollbar-width: thin;                
  }

  ::-webkit-scrollbar {
    width:  4px;   
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FF4641;
  }

  ::-moz-scrollbar-button {
    width: 4px;
    background-color: inherit;
  }

  ::-moz-scrollbar-track {
    background-color: #FF4641;
  }

  ::-moz-scrollbar-thumb {
    background-color: #FF4641;
  }

  ::-moz-resizer {
    width: 4px;
  }

  ::-moz-scrollbar {
    width: 4px;
  }*/

  .chat{
    padding-top: 50px;
    padding-bottom: 135px; 
  }

  .abonent{
    width: 50%; 
    border-right: 1px solid #eee;
    margin-right: 25px;
  }

  .chat_window{
    background: #fff;
    margin-right: 25px;
    margin-top: 25px;
    /*width: 100%;*/
  }

  .user_blok{
    padding: 25px;
    border-bottom: 1px solid #eee;
  }

  .user_img{
    width: 44px;
    height: 44px;
    margin-right: 20px;
  }

  .flag{
    width: 7.27px;
    height: 10px;
    margin-right: 4px;
  }

  .star{
    width: 100%;
  }

  .star img{
    width: 20px;
    height: 15px;
  }

  .user_name{
    font-family: KievitPro;
    font-size: 18px;
    line-height: 17px;
    color: #000000;
  }

  .user_position{
    color: #FF4641;
    font-family: KievitPro;
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 0;
  }

  .user_chat{
    display: block;
    position: relative;
    width: 100%;
    height: 500px;
    overflow-y: auto;
    scrollbar-color: #FF4641 #FFF;    
    scrollbar-width: thin;
    scrollbar-base-color: #FF4641;
    /*scrollbar-3dlight-color: #FFF;*/
    scrollbar-highlight-color: #FFF;
    scrollbar-track-color: #FFF;
    scrollbar-arrow-color: #FFF;
    /*scrollbar-dark-shadow-color: #FFF;*/
  }

  .user_chat::-moz-scrollbar {
    width: 4px;
  }

  .msg_wrapp{
    position: absolute;
    bottom: 0;
    overflow-x: auto;
  }

  .brd_top{
    border-top: 1px solid #eee;
  }

  .send{
    background: url("../assets/img/Send.png");
    border: none; 
    width: 22px;
    height: 22px;
  }

  .input{
    width: 100%;
    margin-right: 20px;
  }

  .input input{
    width: 100%;
    padding: 14px 24px; 
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
  }

  .massage {
    margin: 0px 15px;
    padding: 12px;
    font-family: KievitPro;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    list-style-type: none;
  }

  .slide_avatar{
    margin-right: 20px;
  }

  #admin_chat > ul,
  #user_chat  > ul{
    width: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
  }

  .data{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 25px;
    text-align: left;
    color: #9D9D9D;
  }

/*  .msg_block{

  }*/
</style>