import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserCtx, UsersCtx } from './Context';
import SingleOrder from './SingleOrder';

const UserProfile = () => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserCtx);
    const [users, setUsers] = useContext(UsersCtx);

    const deleteOrdersHistory = () => {
        const thisUser = users.find(member => member.email === currentUser.email);
        thisUser.orders = [];

        // creatng a new array of users without this user
        const filteredUsers = users.filter(member => member.email !== thisUser.email);

        // adding this user to filteredUsers
        const updatedUsers = [...filteredUsers, thisUser];

        // updating localStorage users with updatedUsers
        sessionStorage.setItem('currentUser', JSON.stringify(thisUser));
        setCurrentUser(thisUser);

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers)


    }

    const logoutUser = () => {
        sessionStorage.removeItem('currentUser');
        setCurrentUser(undefined);
    }
    const deleteUser = () => {
        //getting currentUser
        const filteredUsers = users.filter(member => member.email !== currentUser.email);
        //updating in localStoage
        localStorage.setItem('users', JSON.stringify(filteredUsers));
        //changing users state
        setUsers(filteredUsers);
        logoutUser();
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
                    {currentUser.orders.length !== 0 && <>
                        {currentUser.orders.map(order => <SingleOrder order={order} key={order.dateTime} />)}
                        <Link to={'/'} className='d-inline-block btn text-danger mt-4 text-decoration-underline' onClick={deleteOrdersHistory} >Delete Orders History</Link>
                    </>
                    }
                    {currentUser.orders.length === 0 && (<p>No orders history found.</p>)}
                </div>


            </div>
            <div>
                <Link to={'/'} className='d-inline-block btn text-danger mt-4 border border-danger border-1 me-3' onClick={deleteUser}>Delete Account</Link>
                <Link to={'/'} className='d-inline-block btn btn-info text-white mt-4' onClick={logoutUser}>Logout</Link>

            </div>
        </>
    );
};

export default UserProfile;
