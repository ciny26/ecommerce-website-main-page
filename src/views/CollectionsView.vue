<template>
  <div class="collections">
       <ImageProCont class="grid-ele"></ImageProCont>
       <ProductDesc class="grid-ele"></ProductDesc>
       <CartComponent></CartComponent>
  </div>
</template>

<script>
// @ is an alias to /src

import ImageProCont from '@/components/CollectionComp/ImageProCont'
import ProductDesc from '@/components/CollectionComp/ProductDesc' 
import CartComponent from '@/components/CollectionComp/CartComponent'
export default {
  name: 'CollectionsView',
  components:{
    ImageProCont,ProductDesc,CartComponent
  }
  
}
</script>
<style>
  .collections{
    display: block;
    min-height: 100%;
  }
  @media (min-width: 700px) {
    .collections{
      width: 100%;
      min-height: 60vh;
      max-height: 70vh;
      display: grid;
      grid-template-columns: [image] 50% [desc] 35%; /* Define named lines for columns */
            grid-template-rows: auto; /* One row */
            gap: 50px; /* Adjust the gap between grid items */
            justify-content: center;
      
    }
    .collections :first-child{
      grid-column: image; /* Place this item in the 'image' column */
      
    }
    .collections :nth-child(2){
      grid-column: desc; /* Place this item in the 'image' column */
      
    }
  }
</style>
