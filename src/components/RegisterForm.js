import React, { useContext, useEffect, useRef } from 'react';
import { UsersCtx } from './Context';

const RegisterForm = () => {

    const [users, setUsers] = useContext(UsersCtx);

    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const titleRef = useRef();
    const fieldSetRef = useRef();

    const initialUsersFetch = useRef(true)


    const clearForm = () => {
        fNameRef.current.value = '';
        lNameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';

    }
    const registerUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length,
            fName: fNameRef.current.value,
            lName: lNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        users.find((member) => member.email === newUser.email) ? alert('An user is already registered with this email.') : setUsers([...users, newUser]);
    }
    useEffect(() => {
        if (initialUsersFetch.current) {
            initialUsersFetch.current = false;
            return;
        }
        localStorage.setItem('users', JSON.stringify(users));
        clearForm();
        titleRef.current.innerText = 'Registeration Successful. Sign in to continue.'
        fieldSetRef.current.className = 'd-none';


    }, [users])



    return <>
        <h2 className='mb-5 text-primary' ref={titleRef}>Register</h2>
        <form>
            <fieldset ref={fieldSetRef}>
                <div className="row g-3 mb-3 align-items-center">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name </label>
                        <input type="text" className="form-control" id="firstName" required ref={fNameRef} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name </label>
                        <input type="text" className="form-control" id="lastName" required ref={lNameRef} />
                    </div>
                </div>
                <div className="mb-4">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required ref={emailRef} />
                </div>
                <div className="mb-4">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" required ref={passwordRef} />
                </div>


                <button type="submit" onClick={registerUser} className="btn btn-primary mt-1">Submit</button>
            </fieldset>
        </form>
    </>;
};

export default RegisterForm;
