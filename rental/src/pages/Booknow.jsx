import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Booking() {
    const productId = parseInt(useLocation().search.slice(6));
    const navigate = useNavigate();
    const [input, setInput] = useState({
        Pid: productId,
        fullname: "",
        email: "",
        phonenumber: "",
        address: "",
        bookdate: "",
        returndate: ""

    });
    const handleChange = (e) => {

        setInput((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }));

    }
    const dateValidate = () => {
        // var getYear = date.toLocaleString("default", { year: "numeric" });
        // var getMonth = date.toLocaleString("default", { month: "2-digit" });
        // var getDay = date.toLocaleString("default", { day: "2-digit" });
        // var dateFormat = getYear + "-" + getMonth + "-" + getDay;
        if (input.bookdate < input.returndate) return true;
        return false;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (dateValidate()) {
            axios.post(`http://localhost:8000/api/booking/`, input).then((res) => {
                toast.success("Thankful for booking successfully.")
                navigate('/')
            }).catch((err) => console.log(err))

        }
        else {
            toast.error('You enter wrong return date.')
        }
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className=' w-full h-full'>
                <div className='flex flex-col justify-center items-center mt-12 '>
                    {/* <h1 className='text-2xl font-bold mb-2'>Book Now fill details</h1> */}
                    <form className='w-full max-w-lg bg-white p-6 shadow-lg  rounded-md' onSubmit={handleSubmit}>
                        <div className='flex justify-center'>
                            <h1 className='text-xl font-bold mb-2 text-center'>Fill details</h1>
                        </div>
                        <div className='mb-4 mt-4'>

                            <input
                                type="text"
                                name="fullname"
                                placeholder='Your full name'
                                className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-transparent'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type='number'
                                name='phonenumber'
                                placeholder='Enter your valid Phone number'
                                className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-2'>
                            <input
                                type='text'
                                name='address'
                                placeholder='Enter your address'
                                className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='mb-4 flex  justify-between gap-2'>

                            <div>
                                <label className='text-semibold text-gray-400 px-1'>Start date</label>
                                <input
                                    type='date'
                                    name='bookdate'
                                    className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className='text-semibold text-gray-400 px-1'>End date</label>
                                <input
                                    type='date'
                                    name='returndate'
                                    className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type="submit" className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Booking