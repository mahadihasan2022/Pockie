import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import './Technology.css';


const Technology = () => {
  return (
    <div>
      <div class="navbar bg-green-900">
        <div class="flex-1">
          <a className=" btn btn-ghost normal-case text-2xl text-black font-bold"><FontAwesomeIcon icon={faDesktop} className='pr-2 text-5xl text-black'/>Technology</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/All" className="text-sm font-bold text-black hover:bg-red-400">All</Link>
            </li>
            <li>
              <Link to="/Laptop" className="text-sm font-bold text-black hover:bg-red-400">Laptop<FontAwesomeIcon icon={faAngleDown}/></Link>
              <ul>
                <li> <Link to="/Lenovo" className="info font-bold text-black hover:bg-red-400">Lenovo</Link></li>
                <li> <Link to="/HP" className="info font-bold text-black hover:bg-red-400">HP</Link></li>
                <li> <Link to="/MacBook" className="info font-bold text-black hover:bg-red-400">MacBook</Link></li>
                <li> <Link to="/Asus" className="info font-bold text-black hover:bg-red-400">Asus</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Desktop" className="text-sm font-bold text-black hover:bg-red-400">Desktop<FontAwesomeIcon icon={faAngleDown}/></Link>
              <ul>
                <li> <Link to="/Sony" className="info font-bold text-black hover:bg-red-400" >Sony</Link></li>
                <li> <Link to="/LG" className="info font-bold text-black hover:bg-red-400">LG</Link></li>
                <li> <Link to="/Dell" className="info font-bold text-black hover:bg-red-400">Dell</Link></li>
                <li> <Link to="/Samsung" className="info font-bold text-black hover:bg-red-400">Samsung</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Phone" className="text-sm font-bold text-black hover:bg-red-400">Phone <FontAwesomeIcon icon={faAngleDown}/></Link>
              <ul>
                <li> <Link to="/Relmi" className="info font-bold text-black hover:bg-red-400">Relmi</Link></li>
                <li> <Link to="/iPhone" className="info font-bold text-black hover:bg-red-400" >iPhone</Link></li>
                <li> <Link to="/Vivo" className="info font-bold text-black hover:bg-red-400">Vivo</Link></li>
                <li> <Link to="/Walton" className="info font-bold text-black hover:bg-red-400">Walton</Link></li>
                <li> <Link to="/Samphony" className="info font-bold text-black hover:bg-red-400">Samphony</Link></li>
                <li> <Link to="/SamsungPhone" className="info font-bold text-black hover:bg-red-400">Samsung</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/Camera" className="text-sm font-bold text-black hover:bg-red-400" >Camera</Link>
            </li>
            <li>
              <Link to="/USB" className="text-sm font-bold text-black hover:bg-red-400">USB</Link>
            </li>
            <li>
              <Link to="/Charger" className="text-sm font-bold text-black hover:bg-red-400">Charger</Link>
            </li>
            <li>
              <Link to="/KeyBoard" className="text-sm font-bold text-black hover:bg-red-400">KeyBoard</Link>
            </li>
            <li>
              <Link to="/HardDrive" className="text-sm font-bold text-black hover:bg-red-400">HardDrive</Link>
            </li>
            <li>
              <Link to="/Mouse" className="text-sm font-bold text-black hover:bg-red-400">Mouse</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
