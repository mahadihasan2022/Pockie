import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { faCake } from "@fortawesome/free-solid-svg-icons";
import { faChildDress } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { faSocks } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import "./Navber.css";


const Navber = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
              <li className="text-start hover:bg-green-800 hover:text-black rounded-lg">
                {" "}
                <Link to="/Home" class="btn btn-ghost normal-case text-md">
                  Home
                </Link>
              </li>
              <li className="text-start hover:bg-green-800 hover:text-black rounded-lg">
                <a class="btn btn-ghost normal-case text-md">
                  New Products{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-white pl-4"
                  />
                </a>
              </li>
              <li className="text-start hover:bg-green-800 hover:text-black rounded-lg ">
                <a class="btn btn-ghost normal-case text-md">
                  Promotion{" "}
                  <span className="bg-span p-2 text-black font-bold">Hot</span>
                </a>
              </li>
              <li className="text-start hover:bg-green-800 hover:text-black rounded-lg">
                {" "}
                <a class="btn btn-ghost normal-case text-md">
                  <FontAwesomeIcon icon={faTruck} className="pr-4" />
                  <span className="">Shipping</span>
                </a>
              </li>
              <li className="text-start hover:bg-green-800 hover:text-black rounded-lg">
                {" "}
                <Link to="signup" class="btn btn-ghost normal-case text-md">
                  <FontAwesomeIcon icon={faUser} className="pr-4" />
                  <span className="">Sign Up</span>
                </Link>
              </li>
              <li>
                {user ? (
                  <button
                    className="btn btn-ghost normal-case text-md text-white rounded-lg"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                ) : (
                  <Link to="/login"></Link>
                )}
              </li>
            </ul>
          </div>
          <div class="navbar bg-base-100  pl-8">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                  <div className="pl-2">
                    Category
                    <span>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="text-white pl-32"
                      />
                    </span>
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    {" "}
                    <Link
                      to="/Technology"
                      class="btn btn-ghost normal-case text-md hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faDesktop} className="text-xl" />
                      Technology
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="pl-5" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="watch"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faStopwatch} className="text-xl" />
                      Watch
                      <span>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="pl-16"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="HomeLife"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon
                        icon={faEyeDropper}
                        className="text-xl"
                      />
                      Home & Life
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="pl-4" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="cosmetic"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faBrush} className="text-xl" />
                      Cosmetics
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="pl-8" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="fashion"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon
                        icon={faChildDress}
                        className="text-xl"
                      />
                      Fashion
                      <span>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="pl-12"
                        />
                      </span>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="LuxuryFood"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faCake} className="text-xl" />
                      Luxury Food
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="pl-4" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="jewellery"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faRing} className="text-xl" />
                      Jewellery
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} className="pl-8" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/shoes"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faSocks} className="text-xl" />
                      Shoes
                      <span>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="pl-14"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/SunGlass"
                      class="btn btn-ghost normal-case text-md pl-4 hover:bg-lime-100 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faGlasses} className="text-xl" />
                      Sunglass
                      <span>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="pl-10"
                        />
                      </span>
                    </Link>
                  </li>
                  <button className="w-full h-12 btn-color font-bold">
                    See All Category
                  </button>
                </ul>
              </div>
            </div>
            <ul class=" navbar-center pl-40 h-10">
              <li className="text-start hover:bg-green-800 rounded-lg hover:text-black text-white">
                {" "}
                <Link to="/home" className="btn btn-ghost normal-case text-md">
                  Home
                </Link>
              </li>
              <li className="text-start hover:bg-green-800 rounded-lg hover:text-black text-white">
                <Link
                  to="newProduct"
                  className="btn btn-ghost normal-case text-md"
                >
                  New Products{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-white pl-4"
                  />
                </Link>
              </li>
              <li className="text-start hover:bg-green-800 rounded-lg hover:text-black text-white">
                <a class="btn btn-ghost normal-case text-md">
                  Promotion{" "}
                  <span className="bg-span p-4 text-black font-bold">Hot</span>
                </a>
              </li>
              <li className="text-start hover:bg-green-800 rounded-lg hover:text-black text-white">
                {" "}
                <a class="btn btn-ghost normal-case text-md ">
                  <FontAwesomeIcon icon={faTruck} className="pr-4" />
                  <span className="">Shipping</span>
                </a>
              </li>
              <li className="text-start hover:bg-green-800 rounded-lg hover:text-black text-white">
                {" "}
                <Link to="signup" class="btn btn-ghost normal-case text-md ">
                  <FontAwesomeIcon icon={faUser} className="pr-4" />
                  <span className="">Sign Up</span>
                </Link>
              </li>
            </ul>
            {user ? (
              <button
                className="btn btn-ghost normal-case text-md text-white rounded-lg"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Link to="/login"></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
