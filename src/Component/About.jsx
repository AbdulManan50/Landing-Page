import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function About() {
  return (
    <>
      <div id="about" className="bg-[#F3F7FD] py-20">
        <div className="md:w-custom w-[95%] mx-auto md:flex items-center justify-between ">
          <div className="md:w-1/2 w-full relative">
            <div class=" bg-blue sm:p-10 p-4 rounded-md space-y-3 absolute">
              <h1 className="sm:text-6xl text-4xl text-center font-extrabold font-Rajdhani text-white">
                18+
              </h1>
              <div className="w-10 h-[2px] mx-auto bg-white"></div>
              <h1 className=" text-center text-lg font-semibold text-white">
                Years Of <br />
                Experiences
              </h1>
            </div>
            <div>
              <img src="/Img/about-thumb.png" alt="" />
            </div>
            <div>
              <img
                className="absolute bottom-3 sm:right-28 right-10 animate-move w-[30%]"
                src="/Img/about-shape.png"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full space-y-5 md:pt-0 pt-10">
            <h1 className="text-blue font-Rajdhani text-lg font-semibold">
              IT Support For Business
            </h1>
            <h1 className="text-5xl font-extrabold font-Rajdhani">
              Ensuring Your Success Trusted IT Services Source
            </h1>
            <p className="text-[#686868] font-Nunito ">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
            <div className="space-y-8">
              <div className="flex sm:gap-5 gap-3 mt-5">
                <div className="flex w-1/2 items-center group gap-3">
                  <div className="w-16 h-14 shadow-md flex justify-center items-center  bg-white rounded-md group-hover:bg-blue  transition-colors duration-300 ease-in-out">
                    <RiMoneyDollarCircleLine className="text-4xl  transition-colors duration-300 ease-in-out text-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h1 className="font-Rajdhani font-semibold sm:text-2xl text-base leading-none">
                      100% Money Back Gaurentee
                    </h1>
                  </div>
                </div>
                <div className="flex w-1/2 items-center group gap-3">
                  <div className="w-20 h-14 shadow-md flex justify-center items-center  bg-white rounded-md group-hover:bg-blue  transition-colors duration-300 ease-in-out">
                    <LuUsers className="text-4xl  transition-colors duration-300 ease-in-out text-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h1 className="font-Rajdhani font-semibold sm:text-2xl text-base  leading-none">
                      Expert & Dedicated Team Members
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex w-1/2 items-center group gap-3">
                  <div className="w-16 h-14 shadow-md flex justify-center items-center  bg-white rounded-md group-hover:bg-blue  transition-colors duration-300 ease-in-out">
                    <BiSupport className="text-4xl  transition-colors duration-300 ease-in-out text-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h1 className="font-Rajdhani font-semibold sm:text-2xl text-base leading-none">
                      24/7 Free Tehcnical Supports
                    </h1>
                  </div>
                </div>
                <div className="flex w-1/2 items-center group gap-3">
                  <div className="w-16 h-14 shadow-md flex justify-center items-center  bg-white rounded-md group-hover:bg-blue  transition-colors duration-300 ease-in-out">
                    <MdOutlinePeopleAlt className="text-4xl  transition-colors duration-300 ease-in-out text-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h1 className="font-Rajdhani font-semibold sm:text-2xl text-base leading-none">
                      100% Customers Satisfaction
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 pt-5">
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
                  About More
                </span>
                <span class="relative invisible">About More</span>
              </button>
              <img
                className="animate-move"
                src="/Img/about-shape2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
