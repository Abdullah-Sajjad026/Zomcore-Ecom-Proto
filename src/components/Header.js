import React, { useContext } from 'react';
import { Link } from 'react-router-dom/';
import { FaShoppingCart } from 'react-icons/fa';
import { CartCtx } from './Context';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const [cart] = useContext(CartCtx);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-warning p-3">
            <div className="container">
                <Link className='navbar-brand' to={'/'}>eStore</Link>
                <HashLink className='nav-icon position-relative"' to='/cart#top'> <FaShoppingCart />
                    <span className="badge rounded-pill bg-light text-dark">{cart.length}</span>
                </HashLink>
            </div>
        </nav>
    );
};

export default Header;
