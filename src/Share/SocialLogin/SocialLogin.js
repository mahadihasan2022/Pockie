import React from "react";
import { SocialIcon } from "react-social-icons";
import './SocialLogin.css';

const SocialLogin = () => {
  return (
    <div className="pl-16 pr-16 pt-4">
      <div className="container">
        <div className="lines">
            <div className="circle flex justify-center items-center text-xl font-semibold text-black"> 
or
            </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="flex justify-center border border-[2px solid] rounded-lg bg-green-900">
          <button className="h-16">
            <SocialIcon
              url="https://google.com/jaketrent"
              bgColor="black"
              fgColor="white"
            ></SocialIcon>
            <span className="text-lg text-white font-semibold">
              Google SignIn
            </span>
          </button>
        </div>
        <div className="flex justify-center border border-[2px solid] rounded-lg bg-teal-600">
          <button className="h-16">
            <SocialIcon
              url="https://github.com/jaketrent"
              bgColor="black"
              fgColor="white"
            ></SocialIcon>
            <span className="text-lg text-white font-semibold">
              Github SignIn
            </span>
          </button>
        </div>
        <div className="flex justify-center border border-[2px solid] rounded-lg bg-cyan-500">
          <button className="h-16">
            <SocialIcon
              url="https://facebook.com/jaketrent"
              bgColor="black"
              fgColor="white"
            ></SocialIcon>
            <span className="text-lg text-white font-semibold">
              Facebook SignIn
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
