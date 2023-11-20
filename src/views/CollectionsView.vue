<template>
  <div class="collections">
       <ImageProCont></ImageProCont>
       <ProductDesc></ProductDesc>
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
    position: relative;
    height: 100%;
  }
</style>
