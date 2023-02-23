import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import REsky from '../assets/REsky.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

function Details() {
    const id = useParams().id;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`).then((response) => {
            setProduct(response.data);
        }).catch((err) => console.log(err));
    }, [])
    return (
        <>

            <div className=" container mx-auto flex justify-center items-center">
                <div class="max-w-xl " >
                    <a href="#" className='flex justify-center items-center'>
                        <img class=" object-fit w-full h-72" src={`/uploads/${product.Pimg}`} alt="img" />
                    </a>
                    <div class="p-3 mt-4">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{product.Pname}</h5>

                        <p className='text-lg font-semibold text-gray-800'>Number Plate: <span className='text-xl text-black'>{product.Numberplate}</span></p>
                        <p className='text-lg font-semibold text-gray-800'>Rent per day: Rs<span className='text-xl text-black'>{product.price_per_day}</span></p>
                        <p class="my-4 font-normal text-gray-700 dark:text-gray-500 tracking-tight">
                            {product.Pdesc}
                        </p>
                        <div className='my-4  flex justify-around items-center'>

                            <a href="#" className="px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 hover:bg-green-600 rounded-md">
                                Book now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Details