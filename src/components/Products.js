import React, { useContext } from 'react';
import SingleProduct from './SingleProduct';
import { ProductsCtx, IsPendingCtx } from './Context';
import { HashLink } from 'react-router-hash-link';
import SingleProductSkeleton from './SingleProductSkeleton';

const Products = () => {
    const products = useContext(ProductsCtx);
    const gettingProducts = useContext(IsPendingCtx);

    return (
        <>
            <div className='py-5'>
                <div className="container">
                    <div className="title-box py-5">
                        <h2>Products Overview</h2>
                    </div>
                    <section className="products-container my-3">
                        {gettingProducts && [...Array(6)].map((item, index) => <SingleProductSkeleton key={index} />)}
                        {!gettingProducts && products.slice(0, 6).map((product) => <SingleProduct product={product} key={product.id} />)}


                    </section>
                    <div className='text-center mt-5'>
                        <HashLink className='btn btn-success' to='/products#top'>Show All Products</HashLink>
                    </div>

                </div>
            </div>


            {/* {gettingProducts && <div className='p-5 text-center display-3'>Loading ... <br /> <div className="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>}
            {!gettingProducts && <div className='py-5'>
                <div className="container">
                    <div className="title-box py-5">
                        <h2>Products Overview</h2>
                    </div>
                    <section className="products-container my-3">
                        {products.slice(0, 6).map((product) => <SingleProduct product={product} key={product.id} />)}
                    </section>
                    <div className='text-center mt-5'>
                        <HashLink className='btn btn-success' to='/products#top'>Show All Products</HashLink>
                    </div>

                </div>
            </div>} */}

        </>
    );
};

export default Products;
