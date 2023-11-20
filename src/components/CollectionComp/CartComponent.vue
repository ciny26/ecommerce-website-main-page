<template>
    <div class="cart-container">
        <div class="cart-title">
            <strong class="title">Cart</strong>
            <div class="close-icon"><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg></div>
        </div>
        <div class="cart-details" v-if="cartProducts.length!=0">
            <div class="cart-infos" v-for="cProduct in cartProducts" :key="cProduct.pIndex">
                <img src="" alt="" class="product-image">
                <div class="product-details">
                    Fall Limited Edition Sneakers
                    ${{ cProduct.pPrice }} * {{cProduct.pQuantity}} <strong> Total: ${{ cProduct.pTotalPrice }}</strong> 
                </div>
                <div class="delete-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="14" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </div>
            </div>
            <div class="checkout-btn">
                Checkout
            </div>
            
        </div>
        <div class="empty-card-message">your cart is empty</div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['getTotalPrice','getProductQuantity','getUnitPrice'])
    },
    data(){
        return{
            cartProducts:[
                /*{   
                    pIndex:0,
                    pImagelink:'',
                    pPrice:this.getUnitPrice,
                    pQuantity:this.getProductQuantity,
                    pTotalPrice:this.getTotalPrice
                }*/
            ]
        }
    }
    
}
</script>
<style>
    .cart-container{
        display: block;
        position:absolute;
        top: 20px;
        left:calc((3vw)) ;
        width: 90vw;
        height: 200px;
        background-color: white;
        border-radius: 6px;
    }
    .cart-container > *{
        padding: 12px 12px;
    }
    .cart-title{
        display: flex;
        align-items: center;
        height: 10%;
        border-bottom: 1px solid hsl(220, 14%, 75%);
        
    }
    .title{
        text-align: left;
        width: 100%;
    }
    .close-icon{
        text-align: right;
        cursor: pointer;
    }
    .cart-details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
    }
    .cart-infos{
        display: flex;
        align-items: center;
    }
    .cart-infos>*{
        padding: 0 5px;
    }
    .product-image{
        width: 25px;
        height: 30px;
    }
    .delete-icon{
        cursor: pointer;
    }
    .checkout-btn{
        background-color: hsl(26, 100%, 55%);
        color: white;
        padding: 8px;
        margin: 3px 6px;
        border-radius: 6px;
        cursor: pointer;
    }
    .empty-card-message{
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>