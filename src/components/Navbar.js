import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth)

    // if(loading) {
    //     return <Loading/>
    // }

    return (
        <section>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/completedTasks' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out' ><button>Completed Tasks</button></Link>
                            <Link to='/todo' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out' ><button>To-Do</button></Link>
                            <Link to='/calendar' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out' ><button>Calendar</button></Link>
                        </ul>
                    </div>
                    <Link to='/'><button className="btn btn-ghost normal-case text-xl hidden md:block">ToDo App</button></Link>
                </div>
                <div className="navbar-end space-x-5">
                    <Link to='/completedTasks' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out hidden md:block' ><button>Completed Tasks</button></Link>
                    <Link to='/todo' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out hidden md:block' ><button>To-Do</button></Link>
                    <Link to='/calendar' className='font-semibold hover:border p-3 hover:bg-blue-600 hover:text-white duration-300 ease-in-out hidden md:block' ><button>Calendar</button></Link>
                    {
                        user ?
                            <>
                                <button onClick={() => signOut(auth)}  className="btn">Log Out</button>
                            </>
                            :
                            <>

                                <Link to='/login'><button className="btn">Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;