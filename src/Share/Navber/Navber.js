import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './Navber.css';
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown pl-36">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div>
              <li> <Link to="/Home" class="btn btn-ghost normal-case text-md">Home</Link></li>
             <li><a class="btn btn-ghost normal-case text-md">New Products  <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-white pl-4"
                    /></a></li>
               <li><a class="btn btn-ghost normal-case text-md">Promotion <span className="bg-span p-2">Hot</span></a></li>
               <li> <a class="btn btn-ghost normal-case text-md"><FontAwesomeIcon icon={faTruck} className="pr-4"/><span className="">Shipping</span></a></li>
             <li> <a class="btn btn-ghost normal-case text-md"><FontAwesomeIcon icon={faUser} className="pr-4"/><span className="">Sing Up</span></a></li>
              </div>
            </ul>
          </div>
          {/* <div>`  
            Category
            <span className="pl-8">
              <FontAwesomeIcon icon={faAngleDown} className="text-white" />
            </span>
          </div> */}
          <div class="navbar bg-base-100  pl-8">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <div className="pl-2">
                    Category
                    <span><FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-white pl-32"
                    /></span>
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li> <Link to="/Technology"class="btn btn-ghost normal-case text-md pl-4">Technology<span><FontAwesomeIcon icon={faAngleRight}  className="pl-8"/></span></Link>
                  </li>
                  <li> <Link to="watch" class="btn btn-ghost normal-case text-md pl-4">Watch<span><FontAwesomeIcon icon={faAngleRight}  className="pl-16"/></span></Link></li>
                  <li> <Link to='HomeLife' class="btn btn-ghost normal-case text-md pl-4">Home & Life<span><FontAwesomeIcon icon={faAngleRight}  className="pl-5"/></span></Link></li>
                  <li> <Link to='cosmetic' class="btn btn-ghost normal-case text-md pl-4">Cosmetics<span><FontAwesomeIcon icon={faAngleRight}  className="pl-8"/></span></Link></li>
                  <li> <Link to= 'fashion' class="btn btn-ghost normal-case text-md pl-4">Fashion<span><FontAwesomeIcon icon={faAngleRight}  className="pl-12"/></span></Link> </li>
                  <li> <Link to='LuxuryFood' class="btn btn-ghost normal-case text-md pl-4">Luxury Food<span><FontAwesomeIcon icon={faAngleRight}  className="pl-4"/></span></Link></li>
                  <li> <Link to='jewellery' class="btn btn-ghost normal-case text-md pl-4">Jewellery<span><FontAwesomeIcon icon={faAngleRight}  className="pl-8"/></span></Link></li>
                  <li> <Link to='/shoes' class="btn btn-ghost normal-case text-md pl-4">Shoes<span><FontAwesomeIcon icon={faAngleRight}  className="pl-12"/></span></Link></li>
                  <li> <Link to ="/SunGlass"  class="btn btn-ghost normal-case text-md pl-4">Sunglass<span><FontAwesomeIcon icon={faAngleRight}  className="pl-12"/></span></Link></li>
                  <button className="w-full h-12 btn-color font-bold">See All Category</button>
                </ul>
              </div>
            </div>
            <ul class="navbar-center pl-40">
             <li> <Link to="/home" className="btn btn-ghost normal-case text-md">Home</Link></li>
             <li><Link to="newProduct" className="btn btn-ghost normal-case text-md">New Products  <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-white pl-4"
                    /></Link></li>
               <li><a class="btn btn-ghost normal-case text-md">Promotion <span className="bg-span p-4">Hot</span></a></li>
               <li> <a class="btn btn-ghost normal-case text-md pl-24"><FontAwesomeIcon icon={faTruck} className="pr-4"/><span className="">Shipping</span></a></li>
             <li> <a class="btn btn-ghost normal-case text-md pl-16"><FontAwesomeIcon icon={faUser} className="pr-4"/><span className="">Sing Up</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
