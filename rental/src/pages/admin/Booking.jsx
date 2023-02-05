import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Link } from 'react-router-dom'

function Booking() {
    return (
        <div className='flex'>
            <div className='w-1/8 fixed '>
                <Sidebar />
            </div>
            <section className=' w-7/8 mt-8 flex flex-col justify-start items-center mx-auto'>
                <div className='flex justify-between '>
                    <input type="text" name='searchText' placeholder='search booking' className='bg-transparent border border-purple-700 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-4' />
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
                                    Number Plate
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Price/day
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Username
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    No.of days
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border">
                                <td class="w-32 p-4 border">
                                    <img src="data:image/jpeg;base64,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" alt="Apple Watch" />
                                </td>
                                <td class="border px-6 py-4 font-semibold text-gray-900 ">
                                    Apple Watch
                                </td>
                                <td class="border px-6 py-4 text-center font-semibold text-gray-900">
                                    GA001dkfjldfldks'fkds'kfd sflkdsfkdskf'sdk
                                </td>
                                <td class="border px-6 py-4 text-center font-semibold  text-gray-900 ">
                                    $599
                                </td>
                                <td class="border px-6 py-4 font-semibold text-center text-gray-900 ">
                                    Tilak Khatri
                                </td>
                                <td class="border px-6 py-4 font-semibold text-center text-gray-900 ">
                                    5
                                </td>
                                <td class="border px-6 py-4">
                                    {/* <a href="#" class="mx-2 font-bold text-green-600 dark:text-green-500 hover:underline">Edit</a> */}
                                    <a href="#" class="mx-2 font-bold text-red-600 dark:text-red-500 hover:underline">Done</a>
                                </td>
                            </tr>


                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    )
}

export default Booking