import {
    ADD_PRODUCT_SUCCESS,
    SHOW_LOADING,
    GET_PRODUCTS_SUCCESS,
    HAVE_ERROR,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_EDIT,
    PRODUCT_EDITED_SUCCESS
} from '../types';

import Swal from 'sweetalert2';
import clienctaxios from '../config/axios';

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING
        });
        try {
            await clienctaxios.post('/productos', product);
            
            Swal.fire(
                'Correcto',
                'The product was added successfully',
                'success'
            )
            dispatch({
                type: ADD_PRODUCT_SUCCESS,
                payload: product
            });
        } catch (error) {
            dispatch({
                type: HAVE_ERROR,
                payload: true //loading
            });
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error',
            })
        }
    }
}

export function getProductsAction() {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING
        });
        try {
            const res = await clienctaxios.get('/productos');
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: HAVE_ERROR,
                payload: true
            });
        }
    }
}
export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING,
            payload: true
        });
        try {
            await clienctaxios.delete(`/productos/${id}`);
            dispatch({
                type: PRODUCT_DELETED_SUCCESS,
                payload: id
            });
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch({
                type: HAVE_ERROR,
                payload: true
            });
        }
    }
}

export function getProductAction(product) {
    return async (dispatch) => {
        dispatch({
            type: PRODUCT_EDIT,
            payload: product
        });
    }
}
export function updateProductAction(product) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING,
            payload: true
        });
        try {
            await clienctaxios.put(`/productos/${product.id}`, product);
            dispatch({
                type: PRODUCT_EDITED_SUCCESS,
                payload: product
            });
        } catch (error) {
            dispatch({
                type: HAVE_ERROR,
                payload: true
            });
        }
    }
}