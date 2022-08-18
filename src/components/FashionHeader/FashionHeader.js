import React from "react";
import { Link } from "react-router-dom";

const FashionHeader = () => {
  return (
    <div>
      <div class="navbar bg-green-900">
        <div class="flex-1">
          <p className=" btn btn-ghost normal-case text-2xl text-black font-bold">
            Fashion
          </p>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link
                to="/AllFashion"
                className="text-sm font-bold text-black hover:bg-red-400"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to="/man"
                className="text-sm font-bold text-black hover:bg-red-400"
              >
                Men-Collection
              </Link>
            </li>
            <li>
              <Link
                to="/woman"
                className="text-sm font-bold text-black hover:bg-red-400"
              >
                Women-Collection
              </Link>
            </li>
            <li>
              <Link
                to="/child"
                className="text-sm font-bold text-black hover:bg-red-400"
              >
                Child-Collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FashionHeader;
