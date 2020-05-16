import {
    GET_PRODUCTS_SUCCESS,
    SHOW_LOADING,
    ADD_PRODUCT_SUCCESS,
    HAVE_ERROR,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_EDIT,
    PRODUCT_EDITED_SUCCESS
} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false,
    productselect: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HAVE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: state.products.filter(x => x.id !== action.payload)
            }
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productselect: null,
                products: state.products.map(x => x.id === action.payload.id ? action.payload : x)
            }
        case PRODUCT_EDIT:
            return {
                ...state,
                productselect: action.payload
            }
            
        default:
            return state;
    }
}