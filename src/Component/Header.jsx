import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <>
      <div className="to-blue background-gradient sm:block hidden py-2">
        <div className="md:w-custom  w-[95%] mx-auto flex items-center justify-between">
          <div className="md:w-1/2  w-[70%] flex gap-5">
            <div>
              <h1 className="flex items-center gap-2 text-white font-Nunito cursor-pointer">
                <span className="text-white">
                  <FaMapMarkerAlt />
                </span>
                New market Sandigo - California
              </h1>
            </div>
            <div>
              <h1 className="flex items-center gap-2 text-white font-Nunito">
                <span className="text-white cursor-pointer">
                  <MdEmail />
                </span>
                example@example.com
              </h1>
            </div>
          </div>
          <div className="md:w-1/2 w-[30%]  flex justify-end text-white gap-5 text-xl">
            <div className="hover:text-Darkblue cursor-pointer">
              <FaSquareFacebook />
            </div>
            <div className="hover:text-Darkblue cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="hover:text-Darkblue cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="hover:text-Darkblue cursor-pointer">
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-custom w-[95%] mx-auto flex py-4 items-center">
        <div className="w-1/2">
          <img src="/public/Img/logo.png" alt="" />
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <ul className="hidden md:flex pr-14 justify-end gap-8 font-Nunito text-lg hover:text-Darkblue">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact-us">Contact us </a>
            </li>
          </ul>
          <h1>
            <RxHamburgerMenu className=" md:hidden text-2xl hover:text-blue text-black mr-5" />
          </h1>
          <button class="relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-blue rounded-lg shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-blue font transition-all duration-300 transform group-hover:translate-x-full ease">
              Get Started
            </span>
            <span class="relative invisible">Button Text</span>
          </button>
        </div>
      </div>
    </>
  );
}
