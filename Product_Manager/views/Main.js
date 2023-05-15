import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../client/src/components/Productform';
import Productlist from '../client/src/components/Productlist';

const Main = (props) => {
    const [product, setProduct] =useState([]);

return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/><hr /><Productlist product={product} setProduct={setProduct}/>   
    </div>
)
}

export default Main