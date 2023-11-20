<template>
  <nav-bar></nav-bar>
  <main-menu></main-menu>
  <router-view/>
</template>
<script>
import MainMenu from './views/MainMenu.vue';
import NavBar from './components/NavBar.vue';
export default {
  components:{
    MainMenu,NavBar
  }
}
</script>
<style>
:root{
  --Very-dark-blue: hsl(220, 13%, 13%);
  --Dark-grayish-blue: hsl(219, 9%, 45%);
--Grayish-blue: hsl(220, 14%, 75%);
--Light-grayish-blue: hsl(223, 64%, 98%);
--White: hsl(0, 0%, 100%);
--Black /*(with 75% opacity for lightbox background)*/: hsl(0, 0%, 0%);
}
html{
  height: 100%;
  margin: 0;
}
body{
  height: 100%;
  color: var(--Very-dark-blue);
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-size: 16px;
  margin: 0;
}


</style>
