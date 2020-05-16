import React, {Fragment, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getProductsAction} from '../actions/productsActions';
import Product from './Product';

const Products = () => {

    const dispatch = useDispatch();
    

    const {loading, error, products} = useSelector( state => state.products );

    useEffect(() => {
        dispatch(getProductsAction());
    }, [])

    return (
        <Fragment>
            <h2 className="text-center my-5">Product's List</h2>
            {loading ? <p>Cargando..</p>:null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo  un error</p>:null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (<p>No hay productos</p>) : 
                    (products.map(pr => (
                        <Product
                            key={pr.id}
                            product={pr}
                        />
                    )))
                    }
                </tbody>
            </table>
            
        </Fragment>
    );
}
 
export default Products;