import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const url = "localhost:3000/login";
    const doLogin = () => {
        console.log(username, password);
        fetch(
            url,
            {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify({username: username, password: password})
            }
        ).then((response) => {
            const res = JSON.parse(response.body);
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }
    const onChangeHandler = (e) => {
        if(e.target.name === 'username'){
            setUsername(e.target.value);
        }else if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
    }
    return (
        <div className="w-full flex justify-center items-center">
            <div className="mt-10 w-1/2 p-20 border-2 border-indigo-700 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-4">
                    <input name="username" type="text"className="border border-indigo-700 px-4 py-2 rounded-sm" onChange={onChangeHandler} placeholder="Username" value={username}/>
                    <input name="password" className="border border-indigo-700 px-4 py-2 rounded-sm" onChange={onChangeHandler} placeholder="Password" value={password}/>
                    <button className="b bg-indigo-600 px-4 py-2 rounded-sm text-white" onClick={doLogin}>Login</button>
                </div>
                <div className="mt-4">
                    <span>Don't have an account ?</span>
                    <Link className="text-indigo-600 ml-2" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;