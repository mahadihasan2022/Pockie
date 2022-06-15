import React from 'react';

const Item = (props) => {

  
  const { product } = props;
  const { _id, name, img, price, stock, brand } = product;


    return (
        <div class="card w-68 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" className='h-32 w-50' />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name:{name}</h2>
          <p>Brand:{brand}</p>
          <p>Price:{price}</p>
          <p>Stock:{stock}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default Item;