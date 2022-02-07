import React, { useContext, useEffect, useRef } from 'react';
import { UsersCtx } from './Context';

const RegisterForm = () => {

    const [users, setUsers] = useContext(UsersCtx);

    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);
    }, [users])

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

    return <>
        <h2 className='mb-5'>Register</h2>
        <form>
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

            {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
            <button type="submit" onClick={registerUser} className="btn btn-primary mt-1">Submit</button>
        </form>
    </>;
};

export default RegisterForm;
