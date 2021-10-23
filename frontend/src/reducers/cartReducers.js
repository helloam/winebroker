import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    CART_SAVE_PAYMENT_METHOD, 
    CART_SAVE_SHIPPING_ADDRESS,
    CART_CLEAR_ITEMS, } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            //We put payload in a variable, then find if it exists, and we can get from our state,
            //in our cartItems where we want to find for each of items in current state  where x.product that is equal to current item.product.
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if(existItem) {
                return {
                    ...state,
                    //Mapping through cart items. If x.product (current item ID) is equal to existing item, 
                    //then return item for this iteration, else it will be x.
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
            case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.product !== action.payload)
                }
            case CART_SAVE_SHIPPING_ADDRESS:
                return {
                    ...state,
                    shippingAddress: action.payload,
                }
            case CART_SAVE_PAYMENT_METHOD:
                return {
                    ...state,
                    paymentMethod: action.payload,
                }
            case CART_CLEAR_ITEMS:
                return {
                    ...state,
                    cartItems: [],
                }
        default: 
            return state
    }
}