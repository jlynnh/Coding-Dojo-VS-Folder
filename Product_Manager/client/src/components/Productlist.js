import React,{useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Productlist = (props) => {
    const {product, setProduct} = props; 
    useEffect(()=>{
    axios.get("http://localhost:8000/api/product_db")
    .then((res)=>{
	    console.log(res.data);
        setProduct(res.data);
	})
    .catch((err)=>{
        console.log(err);
    	})
    }, [setProduct]);

    return (
    <div>
        <h1>All Products</h1>
        {product.map((product, index)=> {
            console.log(product)
            return (
            <div key={index}>
                <p> {product.title}, {product.price}, {product.description} </p>;
                <Link to={'/product/${product._id}'}>{product.title}</Link>;
            </div>)
        })}
    </div>);
}


export default Productlist