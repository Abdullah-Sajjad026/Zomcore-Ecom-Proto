import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserCtx } from './Context';
import SingleOrder from './SingleOrder';

const UserProfile = () => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserCtx);


    const logoutUser = () => {
        sessionStorage.removeItem('currentUser');
        setCurrentUser(undefined);
    }

    return (
        <>
            <h2 className='mb-5 text-primary'>Hey Sweet User! </h2>
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
                <div className="mb-4 d-md-flex align-items-center">
                    <span className='me-3'>Password:</span>
                    <h4 className='m-0'>{currentUser.password}</h4>
                </div>
            </div>
            <div>
                <h3 className='mt-3 mb-5 text-primary'>You Orders </h3>
                <div>

                    {currentUser.orders.map(order => <SingleOrder order={order} key={order.dateTime} />)}
                </div>
            </div>
            <div>
                <Link to={'/'} className='d-inline-block btn btn-info text-white mt-4' onClick={logoutUser}>Logout</Link>

            </div>
        </>
    );
};

export default UserProfile;
