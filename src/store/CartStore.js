
export default {
    state:{
      Image: '',
      Quantity: null,
      unitPrice: null,
      addToChart: false,
      cartVisible:false
    },
    getters:{
        getProductQuantity(state){
            return state.Quantity
        },
        getProductImage(state){
            return state.Image
        },
        getUnitPrice(state){
            return  parseFloat(state.unitPrice).toFixed(2);
        },
        getTotalPrice(state){
            return (parseFloat(state.Quantity) * parseFloat(state.unitPrice)).toFixed(2);
        },
        getProductavailability(state){
          return state.addToChart
        },
        getCartVisibility(state){
          return state.cartVisible
        }
       
        


    },
    mutations: {
        setQuantity(state , payload) {
            state.Quantity  = payload.value
          },
        setUnitPrice(state , payload){
          state.unitPrice = payload.value
        },
        setImage(state , payload){
          state.Image = payload.value
        },
        availableInCart(state,payload){
          state.addToChart = payload.value
        },
        setCartVisibility(state , payload){
          state.cartVisible = payload.value
        },
        
          
      },
          
    }

