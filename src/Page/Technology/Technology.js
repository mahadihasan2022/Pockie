import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './Technology.css';


const Technology = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a className=" btn btn-ghost normal-case text-2xl text-black font-bold">Technology</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/All" className="text-sm font-bold text-black">All</Link>
            </li>
            <li>
              <Link to="/Laptop" className="text-sm font-bold text-black">Laptop<FontAwesomeIcon icon={faAngleDown}/></Link>
              <ul>
                <li> <Link to="/Asus" className="text-sm font-bold text-black">Asus</Link></li>
                <li> <Link to="/HP" className="text-sm font-bold text-black">HP</Link></li>
                <li> <Link to="/MacBook" className="text-sm font-bold text-black">MacBook</Link></li>
                <li> <Link to="/Lenovo" className="text-sm font-bold text-black">Lenovo</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Desktop" className="text-sm font-bold text-black">Desktop<FontAwesomeIcon icon={faAngleDown}/></Link>
              <ul>
                <li> <Link to="/Samsung" className="text-sm font-bold text-black">Samsung</Link></li>
                <li> <Link to="/LG" className="text-sm font-bold text-black">LG</Link></li>
                <li> <Link to="/Dell" className="text-sm font-bold text-black">Dell</Link></li>
                <li> <Link to="/Sony" className="text-sm font-bold text-black">Sony</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Phone" className="text-sm font-bold text-black">Phone</Link>
              <ul>
                <li> <Link to="/Samsung" className="info font-bold text-black">Samsung</Link></li>
                <li> <Link to="/iPhone" className="info font-bold text-black">iPhone</Link></li>
                <li> <Link to="/Vivo" className="info font-bold text-black">Vivo</Link></li>
                <li> <Link to="/Walton" className="info font-bold text-black">Walton</Link></li>
                <li> <Link to="/Samphony" className="info font-bold text-black">Samphony</Link></li>
                <li> <Link to="/Relmi" className="info font-bold text-black">Relmi</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Camera" className="text-sm font-bold text-black">Camera</Link>
            </li>
            <li>
              <Link to="/USB" className="text-sm font-bold text-black">USB</Link>
            </li>
            <li>
              <Link to="/Charger" className="text-sm font-bold text-black">Charger</Link>
            </li>
            <li>
              <Link to="/KeyBoard" className="text-sm font-bold text-black">KeyBoard</Link>
            </li>
            <li>
              <Link to="/HardDrive" className="text-sm font-bold text-black">HardDrive</Link>
            </li>
            <li>
              <Link to="/Mouse" className="text-sm font-bold text-black">Mouse</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
