import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [text, setText] = useState("");
    console.log(text);
    return (
        <>
            <div className="bg-gray-100 font-sans w-full  m-0 sticky-top">
                <div className="bg-white shadow-lg">
                    <div className="container-fluid mx-8 lg:mx-12">
                        <div className=" flex justify-between items-center  py-4">
                            <Link to='/'>
                                <h1 className='text-xl text-purple-800 font-bold lg:text-3xl md:text-2xl'>ABC T&T</h1>
                            </Link>
                            <div>
                                <input
                                    className=" border-2 border-purple-300 bg-white h-8 w-auto pl-2 pr-8 rounded-lg text-sm  focus:outline-none"
                                    type="search" name="searchtext" placeholder="Search..." onKeyUp={(e) => setText(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar