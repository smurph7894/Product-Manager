import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from 'react-router-dom';
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
    const {id} = useParams();
    const [editedProduct, setEditedProduct] = useState({
        title:"",
        price:"",
        description:""
    });
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get( `http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditedProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [id]);

    const editSubmitHandler = (title, price, description) => {
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
            });
    };
    // console.log("****", editedProduct);

    //tells the system to wait to render the form until you have data from api call
    if (!editedProduct.title){
        return null;
    } 


    return (
        <div>
                <ProductForm 
                onSubmitHandler={editSubmitHandler} 
                initialProductValues={editedProduct}
                buttonName={"Update"}
                />
        </div>
    )
}

export default EditProduct