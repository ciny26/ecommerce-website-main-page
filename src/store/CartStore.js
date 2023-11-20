
export default {
    state:{
       Product:{
        Image:'',
        Quantity:0,
        unitPrice:125.00
       } 
    },
    getters:{
        getProductQuantity(state){
            return state.Product.Quantity
        },
        getProductImage(state){
            return state.Product.Image
        },
        getUnitPrice(state){
            return state.Product.unitPrice.toFixed(2)
        },
        getTotalPrice(state){
            return (state.Product.Quantity * state.Product.unitPrice).toFixed(2) 
        }


    },
    mutations:{
        setQuantity(state,payload){
             state.Product.Quantity = payload.value
            },
        
        
    }
}
