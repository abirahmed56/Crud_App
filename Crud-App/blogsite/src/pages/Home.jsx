import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        const data = localStorage.getItem("isLogged");
        if(data) {
            setIsLogged(data);
        }else{
            setIsLogged(false);
        }
    });
    return (
        <div className="flex justify-center items-center">
            {
                isLogged ? (
                    <LoggedUserData />
                ) : (
                    <>
                        <h1 className="mt-10 text-red-400">Please Login to see Blogs</h1>
                    </>
                )
            }
        </div>
    );
};

const LoggedUserData = () => {
    return <h1>Hello</h1>;
}

export default Home;

