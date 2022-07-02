import React from 'react';
import { Link } from 'react-router-dom'
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user) {
        console.log(user);
    }

    return (
        <section className='my-10 flex justify-center items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className="text-3xl font-bold text-center mt-5 text-green-600">Login('only google')</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="label-text-alt">New to To-Do app? <Link className='text-green-500' to='/register' >Register Here</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary border-0 hover:bg-green-500 bg-green-600" onClick={ () => signInWithGoogle() }>Continue With Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;