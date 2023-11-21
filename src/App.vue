<template>
  
  <nav-bar></nav-bar>
  <main-menu></main-menu>
  <router-view/>
  <div class="cover" v-if="getMenuVisibility"></div>

  
</template>
<script>
import MainMenu from './views/MainMenu.vue';
import NavBar from './components/NavBar.vue';
import { mapGetters } from 'vuex';
export default {
  computed:{
        ...mapGetters(['getMenuVisibility']),
        
    },
  components:{
    MainMenu,NavBar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap');
:root{
  --Very-dark-blue: hsl(220, 13%, 13%);
  --Dark-grayish-blue: hsl(219, 9%, 45%);
--Grayish-blue: hsl(220, 14%, 75%);
--Light-grayish-blue: hsl(223, 64%, 98%);
--White: hsl(0, 0%, 100%);
--Black /*(with 75% opacity for lightbox background)*/: hsl(0, 0%, 0%);
}
html{
  position: relative;
  min-height: 100%;
  margin: 0;
  
}
body{
  height: 100%;
  margin: 0;
}
#app {
  position: relative;
  font-family: 'Kumbh Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--Very-dark-blue);
  height: 100%;
  font-size: 16px;
  margin: 0;
}
.cover{ 
  position: absolute;
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0.5;
        top: 0;
        left: 0;
        z-index: 4;
    }


</style>
