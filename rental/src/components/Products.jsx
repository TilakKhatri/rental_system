import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Products() {
    let date = new Date()
    var dateFormat = date.getFullYear() + "-" + ((date.getMonth() + 1).length != 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate());
    const [booked, setBooked] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then((response) => {
            setProducts(response.data);
        }).catch((err) => console.log(err));
        getUsers();
    }, [])


    const getUsers = () => {
        axios.get('http://localhost:8000/api/booking').then((response) => setBooked(response.data)).catch((err) => console.log(err));
    }


    return (
        <div className=' my-4 relative flex flex-col justify-center items-center'>
            <h1 className='text-purple-700 text-center font-bold text-4xl mb-8'>Our Services</h1>
            <div className=''>
                <div className=" container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">

                    {
                        products.map((ele) => {
                            return (
                                <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-purple-700" key={ele.Pid} style={{ width: "300px", height: "405px" }}>
                                    <a className='flex justify-center items-center'>
                                        <img class="rounded-t-lg object-cover w-full h-48" src={`/uploads/${ele.Pimg}`} alt="img" />
                                    </a>
                                    <div class="p-3 " >
                                        <Link to={`/posts/details/${ele.Pid}`}>
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{ele.Pname}</h5>
                                        </Link>
                                        <p className='text-lg font-semibold text-gray-800'>Number Plate: <span className='text-xl text-black'>{ele.Numberplate}</span></p>
                                        <p className='text-md font-bold text-gray-800'>Rent per Day: <span className='text-md text-black'>{`Rs.` + ele.price_per_day}</span></p>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-500 tracking-tight">{ele.Pdesc.length <= 80 ? ele.Pdesc : ele.Pdesc.substr(0, 80) + '...'}</p>
                                        <div className='mb-0  flex justify-around items-center'>

                                            <Link to={`/booknow?book=${ele.Pid}`}
                                                className="px-3 py-2  text-sm font-medium text-center text-white bg-purple-700 hover:bg-green-600 rounded-md"

                                            >
                                                Book now
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Products