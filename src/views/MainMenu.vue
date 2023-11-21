<template>
    <nav class="menu" v-if="isMobile" :style="menuIsOpened" @transitionend="handleTransitionEnd,handleTransitionStart " >
        <div class="close-btn" @click="CloseMenu">
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="menu-items">
            <li class="menu-item"><router-link to="/">Collections</router-link> </li>   
            <li class="menu-item"><router-link to="">Men</router-link></li>  
            <li class="menu-item"><router-link to="">Women</router-link></li>    
            <li class="menu-item"><router-link to="">About</router-link></li>   
            <li class="menu-item"><router-link to="">Contact</router-link></li>
        </ul>
    </nav>
    
</template>
<script>
export default {
    data() {
    return {
      isMobile: false,
    };
  },
    methods:{
        CloseMenu(){
            this.$store.commit('closeMenu')
            
        },
        handleTransitionEnd() {
      if (!this.menuValue) {
         this.$el.style.display = 'none'
      }
    },
    checkWindowSize() {
      this.isMobile = window.innerWidth < 700;
    },
        
    },
    computed:{
        menuVisibility(){
            return this.$store.state.menuOpen
        },  
        menuIsOpened(){
            return {
                transform: this.menuVisibility ? 'translateX(0)' : 'translateX(-150%)',
      };
        }
    },
    mounted() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);
  },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkWindowSize);
  },
}
</script>
<style>
    .menu{
        z-index: 5;
        display:block;
        position: absolute;
        top: 0;
        width: 60%;
        height: 100%;
        background-color: white;
        margin: 0;
        padding: 0;
        transition: transform 0.3s ease-in-out ;
    }
.close-btn {
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  padding-left: 0.5rem ;
}

.bar {
  position: absolute;
  width: 25%;
  height: 3px;
  background-color: #333;
  top: 50%;
  
}

.bar:nth-child(1) {
  transform: rotate(45deg);
}

.bar:nth-child(2) {
  transform: rotate(-45deg);
}

    .menu-items{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .menu-item{
        text-align: left;
        padding: 0.5rem;
        
    }
    .menu-item:hover , .menu-item:active{
        background-color: hsl(223, 64%, 98%);
    }
    .menu-item > *{
        text-decoration: none;
        color:var(--Very-dark-blue) ;

    }
    @media (min-width:700px){
        .menu{
        z-index: 1;
        display:flex;
        height: 100%;
        background-color: white;
        margin: 0;
        padding: 0;
        
    }
        .close-btn {
            display: none;
  
    }
        .menu-items{
            display: flex;
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .menu-item{
            text-align: center;
            padding: 0.5rem;
            
        }
        .menu-item:hover , .menu-item:active{
            background-color: hsl(223, 64%, 98%);
        }
        .menu-item > *{
            text-decoration: none;
            

        }   


    }
    
</style>