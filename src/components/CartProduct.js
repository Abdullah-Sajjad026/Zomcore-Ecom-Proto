import React, { useContext } from 'react';
import { CartCtx } from './Context';

const CartProduct = ({ product }) => {

    const [cart, setCart] = useContext(CartCtx);
    const { title, image, price, qty } = product;

    return <div className='cart-product pb-5'>
        <div className="row align-items-center">
            <div className="col">
                <img src={image} alt={title} />
            </div>
            <div className="col-8 row align-items-center">
                <div className="col-8">
                    <h5>{title}</h5>
                </div>
                <div className="col-4">
                    <button className='remove' onClick={() => {
                        product.qty === 1 ? setCart(cart.filter(cI => cI.id !== product.id)) : setCart(cart.map(cI => cI.id === product.id ? { ...cI, qty: cI.qty - 1 } : cI));
                    }}>-</button>
                    <span className='mx-2'>{qty}</span>
                    <button className='add' onClick={() => {
                        setCart(cart.map(cI => (cI.id === product.id) ? { ...cI, qty: cI.qty + 1 } : cI))
                    }}>+</button>
                </div>

            </div>

            <div className="col">
                <span>{`$${price}`}</span>
            </div>
        </div>
    </div>;
};

export default CartProduct;
