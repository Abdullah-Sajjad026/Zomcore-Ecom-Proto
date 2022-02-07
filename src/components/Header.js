import React, { useContext } from 'react';
import { Link } from 'react-router-dom/';
import { FaShoppingCart } from 'react-icons/fa';
import { CartCtx, CurrentUserCtx } from './Context';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const [cart] = useContext(CartCtx);
    const [currentUser] = useContext(CurrentUserCtx);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-warning p-3">
            <div className="container">
                <Link className='navbar-brand' to={'/'}>Zomcore.</Link>
                <div className='d-flex align-items-center'>
                    <HashLink className='nav-icon position-relative"' to='/cart#top'> <FaShoppingCart />
                        <span className="badge rounded-pill bg-light text-dark">{cart.length}</span>
                    </HashLink>
                    {
                        currentUser ? <Link to={'/user/profile'} className='ms-4 btn btn-success text-white' >{currentUser.fName}</Link> : <Link to={'/user/signin'} className='ms-4 btn btn-info text-white' >Sign In</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;
