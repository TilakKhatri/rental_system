import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'
import axios from 'axios'

function Booking() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/serving').then((response) => {
            setProducts(response.data);
        }).catch((err) => console.log(err));
    }, []);



    const handleDelete = (Pid) => {
        axios.delete(`http://localhost:8000/api/serving/${Pid}`).then((response) => {
            navigate('/admin/dashboard');
        }).catch(err => console.log(err))
    }

    const handleKeyup = (e) => {

        const searchData = products.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchQuery(searchData)
    }

    return (
        <div className='flex'>
            <div className='w-1/8 fixed '>
                <Sidebar />
            </div>
            <section className=' w-7/8 mt-8 flex flex-col justify-start items-center mx-auto'>
                <div className='flex justify-between '>
                    <input type="text" name='searchText' placeholder='search booking'
                        className='bg-transparent border border-purple-700 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-4'
                        onKeyUp={handleKeyup} />
                    <Link to='/admin/addproduct' className='bg-purple-500 hover:bg-purple-700 text-white font-bold h-10  w-full rounded  flex justify-center items-center mx-2 px-2'>Add Product</Link>
                </div>
                <div className=' overflow-y-auto h-[90vh]' style={{ margin: "20px  0 0 200px", padding: "0 30px" }}>
                    <table class="w-full">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3 border">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Number Plate
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Price/day
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Username
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Booked date
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Return date
                                </th>

                                <th scope="col" class="px-6 py-3 border">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchQuery.length > 0 ? searchQuery.map((ele) => {
                                    return (
                                        <tr className="bg-white border" key={ele.Pid}>
                                            <td className="w-32 p-4 border">
                                                <img src={`/uploads/${ele.Pimg}`} alt="img" />
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.Pname}
                                            </td>

                                            <td className="tracking-tight border px-6 py-4 text-center font-semibold text-gray-900">
                                                {ele.Pdesc}
                                            </td>
                                            <td className="border px-6 py-4 text-center font-semibold text-gray-900">
                                                {ele.Numberplate}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.price}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.Username}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.email}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.phone}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.Address}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.Bookdate}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.Returndate}
                                            </td>
                                            <td className="border px-6 py-4">
                                                <p onClick={() => handleDelete(ele.Pid)} className="mx-2 font-medium text-green-600 dark:text-green-500 hover:underline cursor-pointer">done</p>
                                            </td>
                                        </tr>
                                    )
                                })
                                    :
                                    products.map((ele) => {
                                        return (
                                            <tr className="bg-white border" key={ele.Pid}>
                                                <td className="w-32 p-4 border">
                                                    <img src={`/uploads/${ele.Pimg}`} alt="img" />
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.Pname}
                                                </td>

                                                <td className="tracking-tight border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {ele.Pdesc}
                                                </td>
                                                <td className="border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {ele.Numberplate}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.price}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.Username}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.email}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.phone}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.Address}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.Bookdate}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.Returndate}
                                                </td>
                                                <td className="border px-6 py-4">
                                                    <p onClick={() => handleDelete(ele.Pid)} className="mx-2 font-medium text-green-600 dark:text-green-500 hover:underline cursor-pointer">done</p>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }


                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    )
}

export default Booking