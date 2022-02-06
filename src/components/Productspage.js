import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ProductsCtx, IsPendingCtx } from './Context';
import SingleProduct from './SingleProduct';



const Productspage = () => {
    const products = useContext(ProductsCtx);
    const gettingProducts = useContext(IsPendingCtx);

    return (
        <>
            {gettingProducts && <div className='p-2 text-center display-3'>Loading ...</div>}
            {!gettingProducts && <div className='py-5'>
                <div className="container">
                    <div className="title-box py-5">
                        <h1>Products </h1>
                    </div>
                    <section className="products-container my-3">
                        {products.map(product => <SingleProduct product={product} key={product.id} />)}
                    </section>
                </div>
            </div>}

        </>
    );
};

export default Productspage;
