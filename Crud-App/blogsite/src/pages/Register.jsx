import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center">
            <div className="mt-10 w-1/2 p-20 border-2 border-indigo-700 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-4">
                <input className="border border-indigo-700 px-4 py-2 rounded-sm" placeholder="Name" />
                    <input className="border border-indigo-700 px-4 py-2 rounded-sm" placeholder="Email" />
                    <input className="border border-indigo-700 px-4 py-2 rounded-sm" placeholder="Username" />
                    <input className="border border-indigo-700 px-4 py-2 rounded-sm" placeholder="Password" />
                    <input className="border border-indigo-700 px-4 py-2 rounded-sm" placeholder="Confirm Password" />
                    <button className="b bg-indigo-600 px-4 py-2 rounded-sm text-white">Login</button>
                </div>
                <div className="mt-4">
                    <span>Don't have an account ?</span>
                    <Link className="text-indigo-600 ml-2"to="register">Register</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;