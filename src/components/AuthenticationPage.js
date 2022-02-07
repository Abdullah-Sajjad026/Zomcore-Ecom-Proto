import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import SignInForm from './SignInForm';

const AuthenticationPage = () => {

    const { mode } = useParams();



    return (
        <main className='authpage bg-light'>
            <div className="container">
                <div className="authpage-main rounded-3 row">
                    {mode === 'signin' ? <SignInForm /> : <RegisterForm />}
                </div>
            </div>
        </main>
    );
};

export default AuthenticationPage;
