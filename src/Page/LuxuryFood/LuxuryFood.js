import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../Share/Item/Item';

const LuxuryFood = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product/Luxury%20Food")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
     <div>
           <div className="cont-cont">
        <div className="pt-8">
            <ul className='flex justify-between bg-lime-900'>
                <li className='text-black font-bold text-4xl p-4'><FontAwesomeIcon icon={faCake}  className="pl-8 pr-4 text-pink-400"/>Luxury Food</li>
                <li className='font-bold text-black text-2xl pr-8 pt-6'><Link to = '/LuxuryFood' >All</Link></li>
            </ul>
          <div className="grid pt-8">
          <h1 className="text-4xl text-white font-bold p-4 text-center">Luxury Food</h1>
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

export default LuxuryFood;