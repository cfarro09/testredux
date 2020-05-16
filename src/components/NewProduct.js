import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNewProductAction} from '../actions/productsActions';

const NewProduct = ({history}) => {
    const [product, setproduct] = useState({
        name: '',
        price: 0
    })
    const {name, price} = product;
    const dispatch = useDispatch();
    

    const {loading, error} = useSelector( state => state.products );

    const handlerChangeProduct = e => {
        setproduct({
            ...product,
            [e.target.name]: e.target.name === 'price' ?  Number(e.target.value) : e.target.value
        });
    }
    const handlersubmitnew = e => {
        e.preventDefault();

        if(!name.trim() || !price){
            return;
        }
        dispatch(createNewProductAction(product));

        setproduct({
            name: '',
            price: 0
        });

        history.push('/');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>

                        <form
                            onSubmit={handlersubmitnew}
                        >
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Name Product"
                                    name="name"
                                    onChange={handlerChangeProduct}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Price Product"
                                    name="price"
                                    value={price}
                                    onChange={handlerChangeProduct}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weigh-bold text-uppercase d-block w-100"
                            >Add Product</button>
                        </form>
                        {loading ? <p>Cargando..</p>:null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo  un error</p>:null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;