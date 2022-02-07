import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserCtx } from './Context';

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
                <div className="d-flex g-3 mb-4 align-items-center">
                    <div className="col-md-6 d-flex align-items-center ">
                        <span className='me-3'>First Name:</span>
                        <h4 className='m-0'>{currentUser.fName}</h4>
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <span className='me-3'>Last Name:</span>
                        <h4 className='m-0'>{currentUser.lName}</h4>
                    </div>
                </div>
                <div className="mb-4 d-flex align-items-center">
                    <span className='me-3'>Email Address:</span>
                    <h4 className='m-0'>{currentUser.email}</h4>
                </div>
                <div className="mb-4 d-flex align-items-center">
                    <span className='me-3'>Password:</span>
                    <h4 className='m-0'>{currentUser.password}</h4>
                </div>
                <Link to={'/'} className='btn btn-info text-white' onClick={logoutUser}>Logout</Link>

            </div>
        </>
    );
};

export default UserProfile;
