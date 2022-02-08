import React from 'react';
import { useParams } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import SignInForm from './SignInForm';
import UserProfile from './UserProfile';

const UserPage = () => {

    const { mode } = useParams();



    return (
        <main className='userpage bg-light'>
            <div className="container">
                <div className="userpage-main rounded-3 row">
                    {mode === 'signin' && <SignInForm />}
                    {mode === 'register' && <RegisterForm />}
                    {mode === 'profile' && <UserProfile />}
                </div>
            </div>
        </main>
    );
};

export default UserPage;
