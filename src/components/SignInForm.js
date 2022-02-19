import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserCtx, UsersCtx } from './Context';

const SignInForm = () => {
    const [users, setUsers] = useContext(UsersCtx);
    const [currentUser, setCurrentUser] = useContext(CurrentUserCtx);

    const emailRef = useRef();
    const passwordRef = useRef();
    const titleRef = useRef();
    const fieldSetRef = useRef();
    const regDivRef = useRef();

    const signInUser = (e) => {

        e.preventDefault();

        const thisUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        const exist = users.find((member) => member.email === thisUser.email && member.password === thisUser.password);

        if (exist) {
            sessionStorage.setItem('currentUser', JSON.stringify(exist));
            setCurrentUser(exist);
            window.history.replaceState(null, document.title, "/")
            titleRef.current.innerText = 'Sign In Successful. Happy Shopping.'
            titleRef.current.className = 'alert alert-success'
            fieldSetRef.current.className = 'd-none';
            regDivRef.current.className = 'd-none';

        } else {
            alert('Register please')
        }
    }

    return <>
        <h2 className='mb-5 text-primary' ref={titleRef}>Sign In</h2>
        <form>
            <fieldset ref={fieldSetRef}>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" required ref={emailRef} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" required ref={passwordRef} />
                </div>
                {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                <button type="submit" onClick={signInUser} className="btn btn-primary" >Submit</button>
            </fieldset>
            <div className="form-text mt-3" ref={regDivRef} >
                Not registered? <Link to='/user/register'>Register Now</Link>
            </div>
        </form>


    </>;
};

export default SignInForm;
