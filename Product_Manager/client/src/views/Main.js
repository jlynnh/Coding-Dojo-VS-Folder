import React, {useState} from 'react';
import ProductForm from '../components/Productform';
import Productlist from '../components/Productlist';

const Main = (props) => {
    const [ product, setProduct] =useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/><hr /><Productlist product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>   
    </div>
)
}

export default Main