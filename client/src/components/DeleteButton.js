import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const DeleteButton = (props)=>{
    const {id, productsList, setProductsList} = props;
    const navigate = useNavigate();

    const deleteFilter = (id) =>{
        setProductsList(productsList.filter((product, index)=> product._id !==id));
    };

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                if(productsList){
                    deleteFilter(id);
                }
                else{
                    navigate("/");
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    return (
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteButton