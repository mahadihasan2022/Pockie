import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Item from "../Item/Item";
import './Pagination.css';

const Pagination = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        <div className="cont-cont">
      <div className="p-8">
        <h1 className="text-4xl text-white font-bold p-8 text-center">Our Products</h1>
        <div className="grid">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
            {currentItems.map((product) => (
              <Item key={product._id} product={product}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageClassName="page-number"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Pagination;
