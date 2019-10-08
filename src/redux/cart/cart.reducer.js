import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

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

        case CartActionTypes.REMOVE_ITEM:
            return {
            ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
            ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                ) 
        };
        default:
            return state;
    }
};

export default cartReducer;
