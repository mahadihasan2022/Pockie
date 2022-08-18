import React, { useEffect, useState } from 'react';
import FashionHeader from '../../components/FashionHeader/FashionHeader';
import Item from '../../Share/Item/Item';

const Women = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product/name/Sare")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
     useEffect(() => {
      fetch("http://localhost:5000/product/name/Tops")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
    return (
        <div>
        <div className="cont-cont">
     <FashionHeader></FashionHeader>
       <div className="grid pt-8">
       <h1 className="text-4xl text-white font-bold p-4 text-center">For Woman Best Collection</h1>
         <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
           {products.map((product) => (
             <Item key={product._id} product={product}></Item>
           ))}
           {product.map((product) => (
             <Item key={product._id} product={product}></Item>
           ))}
         </div>
       </div>
     </div>
   </div>
    );
};

export default Women;