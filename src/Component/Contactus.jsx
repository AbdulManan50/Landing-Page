import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contactus() {
  return (
    <>
      <div id="contact-us" className="bg-[#FCFCFC] py-20">
        <div className="md:w-custom w-[95%] mx-auto bg-white md:p-10 p-5 shadow-md rounded-lg flex justify-between flex-wrap">
          <div className="md:w-[60%] sm:w-1/2 w-full">
            <h1 className="text-4xl font-Rajdhani font-extrabold">
              Write to Us Anytime
            </h1>
            <form className=" mx-auto p-4 space-y-4">
              <div className="space-y-4">
                <div className="flex gap-4 ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border-[#0414241A] border-[2px] rounded focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your E-Mail"
                    className="w-full p-3 border-[#0414241A] border-[2px] rounded focus:outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 border-[#0414241A] border-[2px] rounded focus:outline-none"
                  />
                  <select className="w-full p-3 border-[#0414241A] border-[2px] rounded focus:outline-none">
                    <option>Subject</option>
                    <option>Web Developmeny</option>
                    <option>App Developmeny</option>
                    <option>DIgital Marketing</option>
                  </select>
                </div>
              </div>
              <textarea
                placeholder="Write Message"
                className="w-full p-3 border-[#0414241A] border-[2px] rounded focus:outline-none"
                rows="4"
              ></textarea>
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
                  Sumbit
                </span>
                <span class="relative invisible">Sumbit</span>
              </button>
            </form>
          </div>
          <div className="md:w-[30%] sm:w-1/2 w-full sm:mt-0 mt-5  bg-[url(/public/Img/contact-info-box-bg.png)] bg-cover bg-center p-9 rounded-xl space-y-5">
            <h1 className="text-[30px] font-Rajdhani text-white font-extrabold">
              Don’t Forget to Contact Us
            </h1>
            <div className="flex items-center gap-4 ">
              <div className="w-10 h-10 border-[2px] border-white rounded-full flex justify-center items-center">
                <MdLocalPhone className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="font-Nunito text-white">Call Us</h1>
                <h1 className="font-Rajdhani text-white font-extrabold text-xl">
                  +980 123 (4567) 890
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="w-10 h-10 border-[2px] border-white rounded-full flex justify-center items-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h1 className="font-Nunito text-white">Send E-Mail</h1>
                <h1 className="font-Rajdhani text-white font-extrabold text-xl">
                  example@gmail.com
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="w-10 h-10 border-[2px] border-white rounded-full flex justify-center items-center">
                <FaLocationDot className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="font-Nunito text-white">Map</h1>
                <h1 className="font-Rajdhani text-white font-extrabold text-xl">
                  Muslim Town lahore
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
