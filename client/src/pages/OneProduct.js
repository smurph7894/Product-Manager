import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

const OneProduct = ()=> {
    const {id} = useParams();
    const [product,setProduct] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, []);

    return (
        <div style={{marginLeft:"450px", marginRight:"450px", textAlign:"center"}}>
            <p style={{fontSize:"50px"}}>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default OneProduct