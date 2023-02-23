import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function Login() {
    const { currentUser, login } = useContext(AuthContext);

    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInput((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(input)
        // navigate('/admin/dashboard')
    }


    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm space-y-8  mt-24 bg-white rounded-lg shadow-lg ">
                <div className='p-4 m-2'>
                    <div>

                        <h2 className="mt-2 text-center text-xl  md:text-2xl font-bold tracking-tight text-gray-700">LOG IN</h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px ">
                            <div className='my-2'>
                                <input id="email-address" name="email" type="email" autoComplete=''
                                    required
                                    className="relative block w-full appearance-none  rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm bg-transparent"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='my-2'>
                                <input id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none  rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10  focus:outline-none  sm:text-sm bg-transparent"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>



                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-800 py-2 px-4 text-md font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                                Log in
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login