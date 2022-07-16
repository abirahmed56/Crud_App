import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLogged, setIsLogged] = useState(true);
    useEffect(() => {
        const data = localStorage.getItem("isLogged");
        if(data) {
            setIsLogged(data);
        }else{
            setIsLogged(false);
        }
    })
    return (
        <div className="px-10 py-8 bg-indigo-500 flex justify-center items-center">
            <h1 className="text-white text-xl font-bold mr-auto"><Link to="/">Abirblog</Link></h1>
            {
                isLogged ? (
                    <ul>
                        <li className="inline-block mx-5 text-white">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inline-block mx-5 text-white">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="inline-block mx-5 text-white">
                            <Link to="/create">Create Post</Link>
                        </li>
                        <li className="inline-block text-white">
                            <button>Logout</button>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li className="inline-block mx-5 text-white">
                            <Link to="/login">Log In</Link>
                        </li>
                        <li className="inline-block text-white">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    );
};

export default Header;