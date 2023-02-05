import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function AddProduct() {
    const navigate = useNavigate()
    const state = useLocation().state;
    const [error, setError] = useState();

    const [file, setFile] = useState(null);
    const [name, setName] = useState(state?.Pname || "");
    const [numberplate, setNumplate] = useState(state?.Numberplate || "");
    const [price, setPrice] = useState(state?.price_per_day || null);
    const [desc, setDesc] = useState(state?.Pdesc || "");
    const [validate, setValidate] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts').then((response) => {
            setValidate(response.data);
        }).catch((err) => console.log(err))
    }, [numberplate]);

    function checkValidation(numberplate) {
        const validateNumberPlate = !validate.some((ele) => ele.Numberplate === numberplate);
        return validateNumberPlate;
    }


    const upload = async () => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post('http://localhost:8000/api/upload', formData);
        return res.data;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        if (checkValidation(numberplate)) {
            if (!state) {
                axios.post(`http://localhost:8000/api/posts/`, {
                    Pname: name,
                    Pdesc: desc,
                    Pimg: file ? imgUrl : "",
                    Numberplate: numberplate,
                    price_per_day: price

                }).then((res) => { navigate('/admin/products') }).catch((err) => console.log(err))

            }
            else {
                axios.put(`http://localhost:8000/api/posts/${state.Pid}`, {
                    Pname: name,
                    Pdesc: desc,
                    Pimg: file ? imgUrl : "",
                    Numberplate: numberplate,
                    price_per_day: price

                }).then((res) => { navigate('/admin/products') }).catch((err) => console.log(err))

            }
        }
        else {
            setError("Please enter valid register Number plate");
        }

    }

    return (
        <div className='flex flex-col justify-center items-center mt-8 '>
            <h1 className='text-2xl font-bold mb-2'>Add Product</h1>
            <form className='w-full max-w-lg bg-white p-6 shadow-xl rounded-md' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input
                        type='file'
                        name='file'
                        accept='image/*'
                        className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={name || ""}
                        placeholder='Name of bike'
                        className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        type='text'
                        name='numberplate'
                        value={numberplate || null}
                        placeholder='Number plate'
                        className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setNumplate(e.target.value)}
                    />
                    <span className='mb-4 mt-1 text-red-500 text-xs font-thin'>{error}</span>
                </div>
                <div>
                    <textarea
                        name="description"
                        value={desc || ""}
                        cols="30" rows="10"
                        placeholder='Write specification here...'
                        className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <input
                        type='number'
                        value={price || null}
                        name="price"
                        placeholder='Price per days'
                        className='bg-transparent border border-purple-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit" className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Submit</button>

                </div>
            </form>
        </div>
    )
}

export default AddProduct