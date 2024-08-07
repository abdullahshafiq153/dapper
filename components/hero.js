import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:max-w-2xl lg:w-full md:w-3/5 w-5/6 mb-10 md:mb-0">
          {/* Left Gallery Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div className="flex flex-col justify-end">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/jeans.jpg"
                  alt="Jeans"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/tshirts.jpg"
                  alt="tshirts"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col h-[12rem] md:h-[12rem]">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/shorts.jpg"
                  alt="shorts"
                />
              </div>
              <div className="flex flex-col h-26">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/hoodies.jpg"
                  alt="hoodies"
                />
              </div>
              <div className="flex flex-col h-[12rem] md:h-[12rem]">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/jackets.jpg"
                  alt="jackets"
                />
              </div>
            </div>
            <div className="hidden md:grid gap-4">
              <div className="flex flex-col justify-end">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/pants.jpg"
                  alt="pants"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/sweaters.jpg"
                  alt="sweaters"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-grow md:w-2/5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            style={{ fontFamily: "Lobster, cursive" }}
            className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-medium text-gray-900"
          >
            Fresh Styles
            <br className="lg:inline-block" />
            for Every Season
          </h1>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            Discover our exclusive collection of fashion essentials. Limited
            stock, so grab yours before it's too late!
          </p>
          <div className="flex justify-center">
            <Link href="/categories"><button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-base sm:text-lg md:text-xl">
              Explore Now
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
