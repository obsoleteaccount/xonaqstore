//utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id//keep the ones not equal to the one we want to remove
            )
        }

        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem//keep them the same coz they don't need to be modified
            )
    }