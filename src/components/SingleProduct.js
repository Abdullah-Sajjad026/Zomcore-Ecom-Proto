import React, { useContext } from 'react';
import { CartCtx } from './Context';

const SingleProduct = ({ product }) => {
    const [cart, setCart] = useContext(CartCtx);

    return (

        <div className="product-card shadow-sm">
            <img src={product.image} className="product-img-top" alt={product.title} />
            <div className="product-body">
                <h5 className="product-title">{product.title}</h5>
                <h6 className="product-subtitle mb-2 text-muted">$ {product.price}</h6>
            </div>

            {
                cart.find(cI => cI.id === product.id) ? <button className='btn btn-danger' onClick={() => { setCart(cart.filter((cartItem) => cartItem.id !== product.id)) }}>
                    Remove from cart
                </button> : <button className='btn btn-primary' onClick={() => { setCart([...cart, product]) }}>
                    Add to cart
                </button>
            }
        </div>

    )
};

export default SingleProduct;
