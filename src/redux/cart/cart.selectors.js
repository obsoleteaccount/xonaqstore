import {createSelector} from 'reselect'; 

//2 types of selectors: input selector-doesn't use createselector, output selector-uses inut and createselector to build themselves

//input selector takes the whole state and returns a slice of it
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
            0
        )
);  