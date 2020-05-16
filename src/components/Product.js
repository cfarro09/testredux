import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteProduct, getProductAction } from '../actions/productsActions';
import Swal from 'sweetalert2'

const Product = ({ product }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const confirmDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProduct(id));
            }
        })
    }
    const goto = () => {
        dispatch(getProductAction(product));
        history.push(`/productos/editar/${product.id}`)
        //history.push('/');
    }
    return (
        <tr>
            <td>{product.name}</td>
            <td className="font-weight-bold">$ {product.price}</td>
            <td className="acciones">
                <button
                    className="btn btn-primary mr-2"
                    onClick={goto}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDelete(product.id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default Product;