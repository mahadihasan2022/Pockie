import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FashionHeader from '../../components/FashionHeader/FashionHeader';
import Item from '../../Share/Item/Item';

const Fashion = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product/Fashion")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <FashionHeader></FashionHeader>
            <div className="cont-cont">
          <div className="grid pt-8">
          <h1 className="text-4xl text-white font-bold p-4 text-center">Our Collections</h1>
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

export default Fashion;