import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const { onSubmitHandler, initialProductValues, buttonName} = props;
    const [title, setTitle] = useState(initialProductValues.title);
    const [price, setPrice] = useState(initialProductValues.price);
    const [description, setDescription] = useState(initialProductValues.description);

    // console.log("!!!!!!!!!!!", initialProductValues);

    const submitHandler = (e)=>{
        e.preventDefault();
        onSubmitHandler(
            title,
            price,
            description
        );
    };

    // console.log("////////", title, price,description);
    return (
        <div style={{marginLeft:"450px", marginRight:"450px", borderBottom:"5px double lightgray", textAlign:"center"}}>
            <header style={{fontSize:"50px"}}>Product Manager</header>
            <form onSubmit={submitHandler} style={{textAlign:"center"}}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="Number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <button type="submit">{buttonName}</button>
            </form>
        </div>
    )
}

export default ProductForm