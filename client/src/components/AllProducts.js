import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';


const AllProducts = (props)=>{
    const {productsList, setProductsList} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductsList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    console.log(productsList);
    return (
        <div style={{marginLeft:"450px", marginRight:"450px", textAlign:"center"}}>
            <header style={{fontSize:"75px"}}>All Products:</header>
            {
                productsList.map((product, index)=>(
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>
                            <p>{product.title}</p>
                        </Link> 
                        <Link to={`/product/edit/${product._id}`}>Edit</Link>
                        <DeleteButton 
                        id={product._id}
                        productsList={productsList}
                        setProductsList={setProductsList}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts