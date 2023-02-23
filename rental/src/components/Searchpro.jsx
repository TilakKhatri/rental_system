import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Searchpro({ text }) {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/search').then((response) => {
            setProducts(response.data);
        }).catch((err) => console.log(err));

    }, [])

    console.log(products)
    return (
        <div>products</div>
    )
}

export default Searchpro