import React, { useContext, useEffect, useRef } from 'react';
import { UsersCtx } from './Context';

const RegisterForm = () => {

    const [users, setUsers] = useContext(UsersCtx);

    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const telRef = useRef();
    const titleRef = useRef();
    const fieldSetRef = useRef();

    const initialUsersFetch = useRef(true)

    const registerUser = (e) => {
        e.preventDefault();
        const [fName, lName, email, password, tel] = [fNameRef.current.value, lNameRef.current.value, emailRef.current.value, passwordRef.current.value, telRef.current.value]
        if (fName === '' || lName === '' || email === '' || password === '', tel === '') {
            alert('Please provide valid details for all input fields.')
            return;
        } else {
            const newUser = {
                id: users.length,
                fName,
                lName,
                email,
                password,
                tel,
                orders: []
            }
            users.find((member) => member.email === newUser.email) ? alert('An user is already registered with this email.') : setUsers([...users, newUser]);
        }
    }

    useEffect(() => {
        if (initialUsersFetch.current) {
            initialUsersFetch.current = false;
            return;
        }
        console.log('running in registration form');
        localStorage.setItem('users', JSON.stringify(users));
        titleRef.current.innerText = 'Registeration Successful. You can sign in to continue.'
        titleRef.current.className = 'alert alert-success'
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
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required ref={emailRef} />
                </div>
                <div className="mb-4">
                    <label htmlFor="telephone" className="form-label">Phone Number</label>
                    <input type="tel" name='telephone' className="form-control" id="telephone" required ref={telRef} />
                    <small>Format: +xx-xxxxxxxxxx</small>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" required ref={passwordRef} />
                </div>


                <button type="submit" onClick={registerUser} className="btn btn-primary mt-1">Register</button>
            </fieldset>
        </form>
    </>;
};

export default RegisterForm;
