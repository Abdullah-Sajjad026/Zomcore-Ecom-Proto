import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ProductsCtx, IsPendingCtx } from './Context';
import SingleProduct from './SingleProduct';
import SingleProductSkeleton from './SingleProductSkeleton';



const Productspage = () => {
    const products = useContext(ProductsCtx);
    const gettingProducts = useContext(IsPendingCtx);

    return (
        <>

            <div className='py-5'>
                <div className="container">
                    <div className="title-box py-5">
                        <h1>Products </h1>
                    </div>
                    <section className="products-container my-3">
                        {gettingProducts && [...Array(20)].map((item, index) => <SingleProductSkeleton key={index} />)}
                        {!gettingProducts && products.map(product => <SingleProduct product={product} key={product.id} />)}
                    </section>
                </div>
            </div>

            {/* {gettingProducts && [...Array(20)].map((item, index) => <SingleProductSkeleton key={index} />)}
            {!gettingProducts && <div className='py-5'>
                <div className="container">
                    <div className="title-box py-5">
                        <h1>Products </h1>
                    </div>
                    <section className="products-container my-3">
                        {products.map(product => <SingleProduct product={product} key={product.id} />)}
                    </section>
                </div>
            </div>} */}

        </>
    );
};

export default Productspage;
