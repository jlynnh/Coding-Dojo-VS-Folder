import React, {useState} from 'react';
import ProductForm from '../components/Productform';
import Productlist from '../components/Productlist';

const Main = (props) => {
    const [product, setProduct] =useState([]);

return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/><hr /><Productlist product={product} setProduct={setProduct}/>   
    </div>
)
}

export default Main