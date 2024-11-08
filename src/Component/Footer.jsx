import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[url(/Img/footer-bg.jpg)] bg-cover bg-no-repeat ">
        <div className="md:w-custom w-[95%] mx-auto py-20 flex flex-wrap ">
          <div className="sm:w-1/4 sm:block flex  sm:justify-start justify-center flex-col w-full space-y-5 md:pr-10">
            <img
              className="w-[220px]  sm:w-[150px]"
              src="/Img/logo-2.png"
              alt=""
            />
            <p className="font-Nunito text-white  sm:text-left text-center">
              Monotonectally synergize granular top visualize strategic
              infomediaries afters task state of the art infrastructures digital
              agency in north
            </p>
          </div>
          <div className="sm:w-1/4 w-1/2 sm:mt-0  mt-5 space-y-5">
            <h1 className="md:text-3xl text-2xl font-Rajdhani font-extrabold text-white">
              Company
            </h1>
            <ul className="space-y-5">
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    Home
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    About Us
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    Services
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    Contcat Us
                  </h1>
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2 sm:mt-0  mt-5 space-y-5">
            <h1 className="md:text-3xl text-2xl font-Rajdhani font-extrabold text-white">
              Services
            </h1>
            <ul className="space-y-5">
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    Web Development
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    App Development
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    DIgital Marketing
                  </h1>
                </a>
              </li>
              <li>
                <a href="">
                  <h1 className="flex items-center text-white gap-2 hover:text-blue">
                    <span>
                      <FaRegArrowAltCircleRight className="text-blue" />
                    </span>
                    Graphic Desging
                  </h1>
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-10/12  sm:mt-0 mt-10 space-y-5">
            <h1 className="md:text-3xl text-2xl font-Rajdhani font-extrabold text-white">
              Newsletter
            </h1>
            <div className="space-y-5">
              <p className="text-white font-Nunito">
                Subscribe our Latest Newsletter
              </p>
              <div className="border-[2px] rounded-md border-[#e4e4e41a]">
                <input
                  className="bg-transparent py-3 px-2"
                  placeholder="Enter Your Email"
                  type="text"
                />
              </div>
              <button class="relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group">
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
                <span class="absolute flex items-center justify-center w-full h-full text-white font transition-all duration-300 transform group-hover:translate-x-full ease font-Nunito">
                  Subscribe
                </span>
                <span class="relative invisible font-Nunito">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-custom w-[95%] py-5 border-t-[1px] border-white mx-auto flex justify-between flex-wrap items-center">
          <div className="sm:w-1/2 w-full">
            <p className=" text-center sm:text-start  text-white font-Nunito">
              © 2024 Toptech. Designed By Abdul Manan
            </p>
          </div>
          <div className="sm:w-1/2 w-full  sm:mt-0 mt-5">
            <ul className="flex gap-5 sm:justify-end justify-center">
              <li className="bg-[#354662] text-white p-3 rounded-full hover:bg-blue">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="bg-[#354662] text-white p-3 rounded-full hover:bg-blue">
                <a href="">
                  <IoLogoInstagram />
                </a>
              </li>
              <li className="bg-[#354662] text-white p-3 rounded-full hover:bg-blue">
                <a href="">
                  <IoLogoYoutube />
                </a>
              </li>
              <li className="bg-[#354662] text-white p-3 rounded-full hover:bg-blue">
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
