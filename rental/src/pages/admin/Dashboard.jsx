import { useState, useEffect } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import axios from 'axios';

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then((response) => {
            setProducts(response.data);
        }).catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/booking').then((response) => {
            setUsers(response.data);
        }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='flex'>
            <div className='w-1/8 fixed'>
                <Sidebar />
            </div>
            <section className='w-7/8 h-screen mt-24 flex flex-col justify-start items-center mx-auto'>
                <div className=' overflow-y-auto h-[90vh]' style={{ margin: "20px  0 0 200px", padding: "0 30px" }}>
                    <div className='flex'>
                        <div className='flex flex-col justify-center items-center bg-green-600 text-center p-4 m-2 w-[20vw] h-[40vh] rounded-lg shadow-lg'>
                            <h2 className='text-xl font-semibold text-white'>Total Products</h2>
                            <h1 className='text-2xl font-bold text-white'>{products.length}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-blue-600 text-center p-4 m-2 w-[20vw] h-[40vh] rounded-lg shadow-lg'>
                            <h2 className='text-xl font-semibold text-white'>Total Booking</h2>
                            <h1 className='text-2xl font-bold text-white'>{products.length}</h1>

                        </div>
                        <div className='flex flex-col justify-center items-center bg-purple-600 text-center p-4 m-2 w-[20vw] h-[40vh] rounded-lg shadow-lg'>
                            <h2 className='text-xl font-semibold text-white'>Total Users</h2>
                            <h1 className='text-2xl font-bold text-white'>{users.length}</h1>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard