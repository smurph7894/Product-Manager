import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AllProducts = (props)=>{
    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    console.log(products);
    return (
        <div style={{marginLeft:"450px", marginRight:"450px", textAlign:"center"}}>
            <header style={{fontSize:"75px"}}>All Products:</header>
            {
                products.map((product, index)=>(
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>
                            <p>{product.title}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts