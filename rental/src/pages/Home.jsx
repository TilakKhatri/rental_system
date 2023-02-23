import React, { useContext, useState } from 'react';
import Products from '../components/Products';
import pulsar150 from '../assets/BajajPulsar150RB.png'
import FZ from '../assets/FZ-FI.jpg'
import REblack from '../assets/REblack.jpg'
import REsky from '../assets/REsky.jpg'
import REgreen from '../assets/REgreen.jpg'
import Footer from '../components/Footer';
import Searchpro from '../components/Searchpro';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import Login from './admin/Login';



function Home() {
    const { currentUser } = useContext(AuthContext);
    return (

        <>

            {
                currentUser ? <Login /> :

                    <>
                        <section className='flex flex-col'>
                            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                                <div className="carousel-inner relative w-full overflow-hidden">
                                    <div className="carousel-item relative float-left w-full text-center">
                                        <div style={{ backgroundImage: `url(${REblack})` }}
                                            className="block w-full h-[450px] object-cover bg-gray-600"
                                        >
                                            <div className='layer w-full h-full absolute'>

                                            </div>
                                        </div>

                                        <div className="carousel-caption  md:block absolute top-20 text-center text-white items-center">
                                            <h5 className="text-5xl font-extrabold text-center">Royal Enfield Classic 350 for you.</h5>
                                            <p className='text-gray-50 font-bold mt-4 text-center'>We have new bikes that makes your ride better.</p>
                                        </div>
                                    </div>
                                    {/* <div className="carousel-item active relative float-left w-full">
                                        <div style={{ backgroundImage: `url(${FZ})` }}
                                            className="block w-full h-[450px] object-cover bg-gray-600"
                                        >
                                            <div className='layer w-full h-full absolute'>

                                            </div>
                                        </div>
                                        <div className="carousel-caption  md:block absolute top-20 text-center text-white items-center">
                                            <h5 className="text-5xl font-extrabold ">We introduce our new FZ-FI.</h5>
                                            <p className='text-gray-50 font-bold mt-4'>We have new bikes that makes your ride better.</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="carousel-item  relative float-left w-full">
                                        <div style={{ backgroundImage: `url(${pulsar150})` }}
                                            className="block w-full h-[450px] object-cover bg-gray-600"
                                        >
                                            <div className='layer w-full h-full absolute'>

                                            </div>
                                        </div>
                                        <div className="carousel-caption  md:block absolute top-20 text-center text-white items-center">
                                            <h5 className="text-5xl font-extrabold ">Pulsar 150RB.</h5>
                                            <p className='text-gray-50 font-bold mt-4'>We have new bikes that makes your ride better.</p>
                                        </div>
                                    </div> */}


                                </div>
                                <button
                                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <Products />
                        </section>
                        <Footer />
                    </>
            }
        </>
    )
}

export default Home;