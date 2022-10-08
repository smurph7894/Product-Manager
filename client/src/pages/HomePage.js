import React, {useState} from "react";
import axios from "axios";
import AllProducts from "../components/AllProducts";
import ProductForm from "../components/ProductForm";

const HomePage = () => {
    const [productsList, setProductsList] = useState([]);


    const newSubmitHandler = (title, price, description) => {
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProductsList([...productsList, res.data]);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <ProductForm 
            onSubmitHandler={newSubmitHandler} 
            initialProductValues={{
                title: "",
                price: "",
                description: ""
            }}
            buttonName={"Create"}
            />
            <AllProducts productsList={productsList} setProductsList={setProductsList} />
        </div>
    );
}

export default HomePage;