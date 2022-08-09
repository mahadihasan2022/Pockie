import React, { useEffect, useState } from 'react';
import Item from '../../Share/Item/Item';

const ShowMacbook = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/just?brand=Apple&subCategory=Laptop")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
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
    );
};

export default ShowMacbook;