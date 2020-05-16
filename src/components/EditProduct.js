import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {updateProductAction} from '../actions/productsActions';

const EditProduct = () => {
    const history = useHistory();
    const [editproduct, seteditproduct] = useState({
        name: '',
        price: 0
    })
    const dispatch = useDispatch();
    const {productselect} = useSelector( state => state.products);
    

    useEffect(() => {
        seteditproduct(productselect);
    }, [])

    const {name, price} = editproduct;

    const handlerChangeProduct = e => {
        seteditproduct({
            ...editproduct,
            [e.target.name]: e.target.name === 'price' ?  Number(e.target.value) : e.target.value
        });
    }
    const handlersubmit = e => {
        e.preventDefault();

        if(!name.trim() || !price){
            return;
        }

        dispatch(updateProductAction(editproduct));

        history.push('/');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

                        <form
                            onSubmit={handlersubmit}
                        >
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Name Product"
                                    name="name"
                                    value={name}
                                    onChange={handlerChangeProduct}
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
                            >Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;