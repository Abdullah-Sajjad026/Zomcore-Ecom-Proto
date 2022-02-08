import React from 'react';

const SingleOrder = ({ order }) => {

    const { products, dateTime, totalPrice } = order;

    return (
        <div className="singleorder py-4 px-3 my-2">
            <div className='datetime'>
                <div>{dateTime} <span><hr /></span> </div>
            </div>
            <h4 className='py-3'>Ordered Products</h4>
            <div className="singleorder-products-container mb-3">
                {products.map(product => <OrderSingleProduct product={product} key={product.id} />)}
            </div>
            <div className='py-3'>
                <h4>Total Price: <small>$ {totalPrice.toFixed(2)}</small> </h4>
            </div>
        </div>
    );
};

const OrderSingleProduct = ({ product }) => {
    return (
        <div className="product-card shadow-sm">
            <img src={product.image} className="product-img-top" alt={product.title} />
            <div className="product-body">
                <h5 className="product-title">{product.title}</h5>
                <h6 className="product-subtitle mt-1 text-muted">Quantity: {product.qty}</h6>
            </div>
        </div>
    );
}
export default SingleOrder;
