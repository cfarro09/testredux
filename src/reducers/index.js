import { combineReducers } from 'redux';

import ProductsReducer from './productsReducer';

export default combineReducers({
    products: ProductsReducer
})