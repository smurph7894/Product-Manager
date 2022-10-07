import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{marginLeft:"450px", marginRight:"450px", borderBottom:"5px double lightgray"}}>
            <header style={{fontSize:"50px", textAlign:"center"}}>Product Manager</header>
            <form onSubmit={onSubmitHandler} style={{textAlign:"center"}}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="Number" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default ProductForm