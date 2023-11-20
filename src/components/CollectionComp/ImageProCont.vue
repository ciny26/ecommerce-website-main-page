<template>
    <div class="img-product-cont">
        <div class="image" v-for="(img) in images" :key="img.index" :style="{ transform: `translateX(-${currentIndex * 100}vw)` }">
            <img v-bind:src="img.link">
        </div>
        <div class="next-previous-icons">
            <div class="previous" @click="nextImage(false)">
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <div class="next" @click="nextImage(true)">
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images :[
                {   
                    index:0,
                    link:require('../../../images/image-product-1.jpg'),
                    
                },
                {   
                    index:1,
                    link:require('../../../images/image-product-2.jpg'),
                    },
                {   
                    index:2,
                    link:require('../../../images/image-product-3.jpg'),
                    },
                {   
                    index:3,
                    link:require('../../../images/image-product-4.jpg'),
                    },
                
            ],
            currentIndex:0
        }
    },
    methods:{
        nextImage(isNext) {
      if (isNext && this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else if (!isNext && this.currentIndex > 0) {
        this.currentIndex--;
      }else if(isNext && this.currentIndex >= this.images.length - 1){
        this.currentIndex = 0
      }else if(!isNext && this.currentIndex <= 0){
        this.currentIndex =3 
      }
    },
    },
    computed:{
        slideImageToLeft(){
            return {transform:'translateX(-100wv)'}
        }
    }
}
</script>
<style>
    .img-product-cont{
        display: flex;
        position: relative;
        width: 100%;
        height:max-content;
        display: flex;
        overflow-x: hidden;
        
    }
    .image{
        position: relative;
        min-width: 100vw;
        transition: transform 0.5s ease-in-out;
        
        
    }
    img{
        width: 100vw;
        
        
    }
    .next-previous-icons{
        width: 100%;
        display: flex;
        position: absolute;
        top: 50%;
        justify-content: space-between;
    }
    .next-previous-icons > * {
        display: flex;
        background-color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }
    .previous{
        position: absolute;
        left: 5%;
    }
    .next{
        position: absolute;
        right: 5%;
    }

</style>