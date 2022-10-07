import React, {useState} from "react";
import AllProducts from "../components/AllProducts";
import ProductForm from "../components/ProductForm";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <AllProducts products={products} setProducts={setProducts} />
        </div>
    );
}

export default HomePage;