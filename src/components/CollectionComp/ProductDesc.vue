<template>
    <div class="product-cont">
        <div class="description">
            <p class="company"><strong>SNEAKER COMPANY</strong></p>
            <h1 class="offer">Fall Limited Edition Sneakers</h1>
            <p class="explanation">These low-profile sneakers are your perfect casual wear companion
                . Featuring a durable rubber outer sole, they'll withsand everything 
                the weather can offer.
            </p>
        </div>
        <div class="product-buy">
            <div class="price-and-remise">
                <section class="new-price-remise">
                    <h1>$ 125.00</h1>
                    <p>50%</p>
                </section>
                <section class="old-price"><s>250.00$</s></section>
            </div>
            <div class="product-calc">
                <div class="number-bought" >
                    <div class="minus" @click="setQuantity('-1')">
                        <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>
                    </div>
                    <div class="quantity">
                        {{ this.quantity }}
                    </div>
                    <div class="plus" @click="setQuantity('+1')">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg>
                    </div>
                </div>
                <div class="add-to-chart" @click="cartData">
                    <div class="icon">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                    </div>
                    <p class="text">
                        Add to cart
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['getProductQuantity' , 'getProductImage' ,'getUnitPrice']),
        
    },
    data(){
        return{
            quantity : 0,
            unitPrice : 125.00.toFixed(2),
            link:require('../../../images/image-product-2.jpg'),
        }
    },
    methods:{
        setQuantity(index){
            
            if(index == -1 ){
                if(this.quantity > 0)
                    this.quantity--;
                else
                    this.quantity = 100
            }
            else if(index == 1){
                
                if(this.quantity < 100)
                    this.quantity++;
                else
                    this.quantity = 0
                
                }
                
                
                
            },
            cartData(){
                this.$store.commit('availableInCart', {value:true});
                this.$store.commit('setQuantity',{value:this.quantity})
                this.$store.commit('setUnitPrice',{value:this.unitPrice})
                this.$store.commit('setImage',{value:this.link})
            },
                
            }
        }
        
        
        
    
    

</script>
<style>
    .product-cont{
        padding: 10px 15px;
    }
    .description > *{
        text-align: left;
    }
    .company{
        color: hsl(26, 100%, 55%);
    }
    .explanation{
        color:hsl(219, 9%, 45%);
    }
    .price-and-remise{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .price-and-remise > *{
        display: flex;
        width: 100%;
    }
    .new-price-remise{
        align-items: center;
        justify-content: space-between;
    }
    .new-price-remise :nth-child(2){
        background-color: hsl(25, 100%, 94%);
        color: hsl(26, 100%, 55%);
        border-radius: 6px;
    }
    .old-price{
        justify-content: right;
        color:hsl(220, 14%, 75%);
    }
    .product-calc{
        display: flex;
        flex-direction: column;
    }
    .number-bought{
        display: flex;
        justify-content: space-between;
        border-radius: 6px;
        background-color: hsl(223, 64%, 98%);
    }
    .number-bought > *{
        width: 25%;
        padding: 6px 0;
        cursor: pointer;
        
    }
    .add-to-chart{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        margin-top: 1rem;
        background-color: hsl(26, 100%, 55%);
        border-radius: 6px;
        cursor: pointer;
        
    }
    .add-to-chart > *{
        color: white;
        padding:5px ;
    }
    @media (min-width:700px) {
        h1,p{
            margin:12px 0 0 0;
        }
        .product-cont{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .description > *{
            margin: 4px 0;
        }
        .price-and-remise{
        display: flex;
        flex-direction: column;
        width: 60%;
        
        }
        .new-price-remise{
        align-items: center;
        justify-content:left;
        }
        .new-price-remise > p{
            margin-left: 10px;
        }
        .old-price{
            justify-content: left;
            margin-top: 6px;
        }
        .product-calc{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
        .number-bought{
        display: flex;
        align-items: center;
        width: 30%;
        height: 45px;
    }
    .number-bought > *{
        width: 30%;
        padding: 6px 0;
        cursor: pointer;
        
    }
    .add-to-chart{
        margin: 0 0 0 10px;
        width: 60%;
    }
    .text{
        margin: 0;
    }
    }
    
    
</style>