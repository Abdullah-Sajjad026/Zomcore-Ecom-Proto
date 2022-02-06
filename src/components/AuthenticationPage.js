import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AuthenticationPage = () => {
    const { mode } = useParams();
    return (
        <main className='authpage bg-light'>
            <div className="container">
                <div className="authpage-main rounded-3 row">
                    {mode === 'signin' ? <>
                        <h2 className='mb-5'>Sign In</h2>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div class="mb-4">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name='password' class="form-control" id="password" required />
                            </div>
                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <div className="form-text mt-3">
                            Not registered? <Link to='/auth/register'>Register Now</Link>
                        </div>
                    </> : <>
                        <h2 className='mb-5'>Register</h2>
                        <form>
                            <div className="row g-3 mb-3 align-items-center">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name </label>
                                    <input type="text" className="form-control" id="firstName" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name </label>
                                    <input type="text" className="form-control" id="lastName" required />
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name='password' class="form-control" id="password" required />
                            </div>
                            <div class="mb-5">
                                <label for="phoneNumber" class="form-label">Phone Number</label>
                                <input type="number" name='phoneNumber' class="form-control" id="phoneNumber" required />
                            </div>
                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </>}
                </div>
            </div>
        </main>
    );
};

export default AuthenticationPage;
