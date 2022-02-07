import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import { CartCtx, CurrentUserCtx } from './Context';


const Cartpage = () => {

    const [cart] = useContext(CartCtx);
    const [currentUser] = useContext(CurrentUserCtx);

    const subTotal = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    const taxPrice = cart.reduce((acc, curr) => acc + Number(curr.qty * (curr.price * (3 / 100))), 0)
    const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), taxPrice)

    return (
        <main className='cartpage bg-light'>
            <div className="container">
                <div className="cartpage-main rounded row">

                    <div className="col-md-6 py-5 px-4">
                        <h2 className='mb-5'>Billing Address</h2>

                        {currentUser ? <>

                            <form>
                                <div className="row g-3 mb-3 align-items-center">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name </label>
                                        <input type="text" className="form-control" id="firstName" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name </label>
                                        <input type="text" className="form-control" id="lastName" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                    <textarea className="form-control" id="streetAddress" />
                                </div>


                                <button type="submit" className="mt-3 btn btn-primary">Place Order</button>
                            </form>

                        </> : <div class="alert alert-warning" role="alert">
                            Please sign in to place order.
                        </div>

                        }

                    </div>
                    <div className="col-md-6 py-5 px-4">
                        <h2 className='mb-5'>Cart</h2>
                        {cart.length === 0 ? <h5>Cart is empty.</h5> : <>
                            <div className='cart-products-wrapper'>
                                {cart.map(product => <CartProduct product={product} key={product.id} />)}
                            </div>
                            <hr />
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <h5 className='mb-0 me-4'>SubTotal:</h5>
                                <span className="text-primary">$ {subTotal.toFixed(2)}</span>
                            </div>
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <h5 className='mb-0 me-4'>Tax:</h5>
                                <span className="text-primary">$ {taxPrice.toFixed(2)}</span>
                            </div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <h4 className='mb-0 me-4'>Total:</h4>
                                <span className="fw-bold text-primary">$ {totalPrice.toFixed(2)}</span>
                            </div>
                        </>}


                    </div>

                </div>
            </div>

        </main>
    )
};

export default Cartpage;
