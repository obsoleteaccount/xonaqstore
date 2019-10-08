import React from 'react';
import {connect} from 'react-redux';//pull of data about cartItems from redux store
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {   
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item = {cartItem} />
                    ))
                    :(
                        <span className='empty-message'>YOUR CART IS EMPTY</span>
                    )

            }
        </div>  
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}
            >           
            CHECKOUT
            </CustomButton>
    </div>
);

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// });
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));