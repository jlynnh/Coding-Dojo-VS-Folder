import React,{useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Productlist = (props) => {
    const {removeFromDom, product, setProduct} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    } 
    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    .then((res)=>{
	    console.log(res);
        setProduct(res.data.Product);
	})
    .catch((err)=>{
        console.log(err);
    	})
    }, [setProduct]);

    return (
    <div>
        <h1>All Products</h1>
        {product.map((product, index)=> {
            return (
            <div key={index}>
                <p> {product.title}, {product.price}, {product.description} </p>;
                <Link to={`/detail/${product._id}`}>{product.title}</Link>; 
                <Link to={'/update/'+ product._id}>Update</Link>;  
                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            </div>)
        })}
    </div>);
}


export default Productlist