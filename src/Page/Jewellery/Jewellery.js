import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../Share/Item/Item';

const Jewellery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product/Jewellery")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
     <div>
           <div className="cont-cont">
        <div className="pt-8">
            <ul className='flex justify-between bg-sky-800'>
                <li className='text-black font-bold text-4xl p-4'><FontAwesomeIcon icon={faRing}  className="pl-8 pr-4 text-yellow-700 text-4xl"/>Jewellery</li>
                <li className='font-bold text-black text-2xl pr-8 pt-6'><Link to = '/jewellery' >All</Link></li>
            </ul>
          <div className="grid pt-8">
          <h1 className="text-4xl text-white font-bold p-4 text-center">Jewellery</h1>
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

export default Jewellery;