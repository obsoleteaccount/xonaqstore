import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true//hide the dropdown when users first come to the website
};

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;
