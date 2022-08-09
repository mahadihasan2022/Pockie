import React, { useEffect, useState } from 'react';
import Item from '../../Share/Item/Item';
import Technology from '../Technology/Technology';

const Phone = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product/subCategory/Phone")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
     <div>
        <Technology></Technology>
           <div className="cont-cont">
        <div className="p-8">
          <h1 className="text-4xl text-white font-bold p-20 text-center">Our Products</h1>
          <div className="grid">
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
              {products.map((product) => (
                <Item key={product._id} product={product}></Item>
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Phone;