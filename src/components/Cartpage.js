import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import { CartCtx, CurrentUserCtx, UsersCtx } from './Context';


const Cartpage = () => {

    const [cart] = useContext(CartCtx);
    const [users, setUsers] = useContext(UsersCtx);
    const [currentUser] = useContext(CurrentUserCtx);

    const subTotal = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    const taxPrice = cart.reduce((acc, curr) => acc + Number(curr.qty * (curr.price * (3 / 100))), 0)
    const totalPrice = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), taxPrice)

    const placeOrder = (e) => {
        e.preventDefault();
        // const localStgUser = users.find((member) => member.email === currentUser.email);
        // const thisOrder = {
        //     products: [...cart],
        // }
        // localStgUser.orders = [...localStgUser.orders, thisOrder];
        // console.log(localStgUser);
        // setUsers(users => {
        //     users.map(member => {
        //         return member.email === currentUser.email ? localStgUser : member;
        //     })
        // });
    }

    return (
        <main className='cartpage bg-light'>
            <div className="container">
                <div className="cartpage-main rounded row">

                    <div className="col-lg-6 py-5 px-4">
                        <h2 className='mb-5'>Billing Address</h2>


                        {!currentUser && <div class="alert alert-warning" role="alert">
                            Please sign in to place order.
                        </div>}
                        {
                            (currentUser && cart.length === 0) && <div class="alert alert-primary" role="alert">
                                Add some items to cart to place order.
                            </div>
                        }
                        {
                            (currentUser && cart.length !== 0) && <>
                                <div>
                                    <div className="row g-3 mb-4 align-items-center">
                                        <div className="col-md-6 d-md-flex align-items-center ">
                                            <span className='me-3'>First Name:</span>
                                            <h4 className='m-0'>{currentUser.fName}</h4>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-center ">
                                            <span className='me-3'>Last Name:</span>
                                            <h4 className='m-0'>{currentUser.lName}</h4>
                                        </div>
                                    </div>
                                    <div className="mb-4 d-md-flex align-items-center">
                                        <span className='me-3'>Phone Number:</span>
                                        <h4 className='m-0'>{currentUser.tel}</h4>
                                    </div>
                                    <div className="mb-4 d-md-flex align-items-center">
                                        <span className='me-3'>Email Address:</span>
                                        <h4 className='m-0 text-break'>{currentUser.email}</h4>
                                    </div>


                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                        <textarea className="form-control" id="streetAddress" />
                                    </div>
                                    <button type="submit" onClick={placeOrder} className="mt-3 btn btn-primary">Place Order</button>
                                </form>

                            </>
                        }

                    </div>
                    <div className="col-lg-6 py-5 px-4">
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
