import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import "./Header.css";
import Navber from "../../Share/Navber/Navber";

const Header = () => {
  return (
    <div>
      <div className="bg-black">
      <div className="bg">
        <div className="nav-component">
        <div className="navber">
            <div>
                <SocialIcon url="https://facebook.com/jaketrent" bgColor="black" fgColor="white" ></SocialIcon>
            </div>
            <div>
            <SocialIcon url="https://linkedin.com/jaketrent" bgColor="black" fgColor="white" ></SocialIcon>
            </div>
            <div>
            <SocialIcon url="https://twitter.com/jaketrent" bgColor="black" fgColor="white" ></SocialIcon>
            </div>
            <div>
            <SocialIcon url="https://email.com/jaketrent" bgColor="black" fgColor="white" ></SocialIcon>
            </div>
          </div>
         
        <div className="nav-route">
          <a className="font-bold text-white pl-2 pr-4 pt-2">Introduce .</a>
          <a className="font-bold text-white pl-2 pr-4 pt-2">Partner Incentives .</a>
          <a className="font-bold text-white pl-2 pr-4 pt-2">Promotions .</a>
          <a className="text-white font-bold pl-2 pr-4 pt-2">Contract .</a>
          <a className="text-white font-bold pl-2 pr-4 pt-2">Frequently Asked Questions .</a>
        </div>
        </div>
      </div>
      <div className="nav-container">
          <h1 className="font-bold text-white text-5xl pt-2">Pockie</h1>
          <div className="justify pb-4">
              <input type="text" className="width" placeholder="What are you looking for..."/>
              <input type="text" className="width" placeholder="category"/>
              <div className="padding"> <button className="highet text-black font-bold">Search</button></div>
             <div className="cart"><FontAwesomeIcon icon={faHeart} /></div>
             <div className="heart"><FontAwesomeIcon icon={faCartPlus}  className="text-white"/></div>
          </div>
      </div>
    </div>
    <div><Navber></Navber></div>
    </div>
  );
};

export default Header;
