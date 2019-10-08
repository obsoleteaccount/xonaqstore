import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,//hide the dropdown when users first come to the website
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
               ...state,//return an object with all the state
            //   cartItems: [...state.cartItems, action.payload]//we want our array to be our old cartitems and with the newest actions that got fired that is triggering our app item we want to deposit whatever the item that is in the payload of that action into this array
                cartItems: addItemToCart(state.cartItems, action.payload)
        }
        default:
            return state;
    }
};

export default cartReducer;
