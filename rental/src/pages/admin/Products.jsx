import { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then((response) => {
            setProducts(response.data);
        }).catch((err) => console.log(err));
    }, []);



    const handleDelete = (Pid) => {
        axios.delete(`http://localhost:8000/api/posts/${Pid}`).then((response) => {
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
            <div className='w-1/8 fixed'>
                <Sidebar />
            </div>
            <section className='w-7/8 mt-8 flex flex-col justify-start items-center mx-auto'>
                <div className='flex justify-between '>
                    <input type="text" name='searchText'
                        placeholder='search product'
                        className='bg-transparent border border-purple-700 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-4'
                        onKeyUp={handleKeyup}
                    />
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
                                            {/* <td class="border px-6 py-4 text-center font-semibold text-gray-900">
                                                {ele.Pdesc.length <= 50 ? ele.Pdesc : ele.Pdesc.substr(0, 50) + '...'}
                                            </td> */}
                                            <td className="tracking-tight border px-6 py-4 text-center font-semibold text-gray-900">
                                                {ele.Pdesc}
                                            </td>
                                            <td className="border px-6 py-4 text-center font-semibold text-gray-900">
                                                {ele.Numberplate}
                                            </td>
                                            <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                {ele.price_per_day}
                                            </td>
                                            <td className="border px-6 py-4">
                                                <Link to={`/admin/addproduct?edit=${ele.Pid}`}
                                                    state={ele}
                                                    className="mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                                <p onClick={() => handleDelete(ele.Pid)} className="mx-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</p>
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
                                                {/* <td class="border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {ele.Pdesc.length <= 50 ? ele.Pdesc : ele.Pdesc.substr(0, 50) + '...'}
                                                </td> */}
                                                <td className="tracking-tight border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {ele.Pdesc}
                                                </td>
                                                <td className="border px-6 py-4 text-center font-semibold text-gray-900">
                                                    {ele.Numberplate}
                                                </td>
                                                <td className="border px-6 py-4 font-semibold text-gray-900 ">
                                                    {ele.price_per_day}
                                                </td>
                                                <td className="border px-6 py-4">
                                                    <Link to={`/admin/addproduct?edit=${ele.Pid}`}
                                                        state={ele}
                                                        className="mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                                    <p onClick={() => handleDelete(ele.Pid)} className="mx-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</p>
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

export default Products;