import React from "react";

export default function Banner() {
  return (
    <>
      <div
        id="home"
        className="bg-[url(/Img/hero-bg.png)] bg-cover bg-no-repeat "
      >
        <div className="md:w-custom w-[95%]  mx-auto flex justify-between items-center">
          <div className="md:w-[50%] w-full space-y-5 py-10">
            <h1 className="text-[19px] font-Rajdhani font-medium text-white">
              Unlock Your Potential with Tech Solutions
            </h1>
            <h1 className="sm:text-[60px] text-5xl leading-none text-white font-Rajdhani font-extrabold">
              Empowering Businesses with Innovative Solutions
            </h1>
            <p className="text-gray text-xl font-Nunito">
              Professionally optimize interdependent intellectual interoperable
              connect best practices. Progressively fabricate done
            </p>
            <div className="flex gap-5">
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
                  Lets Talk
                </span>
                <span class="relative invisible font-Nunito">Lets Talk</span>
              </button>
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
                  Read More
                </span>
                <span class="relative invisible font-Nunito">Read More</span>
              </button>
            </div>
          </div>
          <div className="w-[50%] md:block hidden">
            <div className="flex justify-end items-center pt-10 relative">
              <img
                className="absolute top-36 left-28 rotate-circle"
                src="/Img/hero-shape.png"
                alt=""
              />
              <img
                className="w-[68%]"
                src="/Img/hero-thumb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
