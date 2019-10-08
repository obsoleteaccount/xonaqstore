import { combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';///local storage as default storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//define a new persist config which is just the json object that reps the possible configs that we want for redux persist to use
const persistConfig = {
    key: 'root',//@ what point in our reducer object do we want to start to store everything. We want to start from the root
    storage,//pass storage in as storage
    whitelist: ['cart']//array containing the string name of any of the reducers that we want to store i.e the 2 below
};


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// export default combineReducers({
//     user: userReducer,//handled by firebase auth. no reason to persist
//     cart: cartReducer//only thing we need to persist as shown in the whitelist array
// });

export default persistReducer(persistConfig, rootReducer);//modified version of root reducer with persistence capabilities