import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Users() {
    const navigate = useNavigate();
    const [bookedUsers, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/booking').then((response) => {
            setUsers(response.data);
            // console.log(response.data)
        }).catch((err) => console.log(err));
    }, []);

    const handleDelete = (Uid) => {
        axios.delete(`http://localhost:8000/api/booking/${Uid}`).then((response) => {
            navigate('/admin/dashboard');
        }).catch(err => console.log(err))
    }

    const handleKeyup = (e) => {
        const searchData = bookedUsers.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchQuery(searchData)
    }

    return (
        <div className='flex'>
            <div className='w-1/8 fixed'>
                <Sidebar />
            </div>
            <section className='w-7/8 mt-8 flex flex-col justify-start items-center mx-auto'>
                <div className='flex justify-between '>
                    <input type="text" name='searchText'
                        placeholder='search users'
                        className='bg-transparent border border-purple-700 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-4'
                        onKeyUp={handleKeyup}
                    />
                    <Link to='/admin/addproduct' className='bg-purple-500 hover:bg-purple-700 text-white font-bold h-10  w-full rounded  flex justify-center items-center mx-2 px-2'>Add Product</Link>
                </div>
                <div className=' overflow-y-auto h-[90vh]' style={{ margin: "20px  0 0 200px", padding: "0 30px" }}>
                    <table className="w-full">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3 border">
                                    Product ID
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Phone Number
                                </th>

                                <th scope="col" className="px-6 py-3 border">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Book Date
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Return Date
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchQuery.length > 0 ?
                                    searchQuery.map((user) => {
                                        return (
                                            <tr className="bg-white border" key={user.Uid}>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {user.Pid}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {user.Fullname}
                                                </td>
                                                <td className="border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {user.Email}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {user.Phonenumber}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.Address}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.bd}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.rd}
                                                </td>
                                                <td className="border px-6 py-4">
                                                    <a href="#" className="mx-2 font-medium text-blue-600 dark:text-green-500 hover:underline cursor-pointer">Verify</a>
                                                    <p onClick={() => handleDelete(user.Uid)} className="mx-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</p>
                                                </td>
                                            </tr>
                                        )
                                    })

                                    : bookedUsers.map((user) => {
                                        return (
                                            <tr className="bg-white border" key={user.Uid}>
                                                <td className="border px-4 py-4 font-semibold text-gray-900 ">
                                                    {user.Pid}
                                                </td>
                                                <td className="border px-4 py-4 font-semibold text-gray-900 ">
                                                    {user.Fullname}
                                                </td>
                                                <td className="border px-4 py-4 text-center font-semibold text-gray-900">
                                                    {user.Email}
                                                </td>
                                                <td className="border px-4 py-4 font-semibold text-gray-900 ">
                                                    {user.Phonenumber}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.Address}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.bd}
                                                </td>
                                                <td className="w-32 p-4 border">
                                                    {user.rd}
                                                </td>
                                                <td className="border px-6 py-4">
                                                    <a href="#" className="mx-2 font-medium text-blue-600 dark:text-green-500 hover:underline cursor-pointer">Verify</a>
                                                    <p onClick={() => handleDelete(user.Uid)} className="mx-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</p>
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

export default Users