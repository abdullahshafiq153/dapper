import React, { useState } from "react";
import Head from "next/head";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>Dapper - Modern Men's Fashion</title>
        <meta
          name="description"
          content="Dapper is your go-to store for modern men's fashion. Explore our collection of stylish clothing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <div className="flex items-center">
              <Link href="/" legacyBehavior>
                <a className="flex title-font font-medium items-center text-gray-900">
                  <img src="/logo.svg" alt="logo" className="w-10 h-10" />
                  <span className="font-bold ml-1 text-xl">Dapper</span>
                </a>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-3xl focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:items-center text-base justify-center w-full md:w-auto md:ml-10`}
          >
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-900 hover:font-bold">Home</a>
            </Link>
            <Link href="/categories" legacyBehavior>
              <a className="mr-5 hover:text-gray-900 hover:font-bold">
                Categories
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="mr-5 hover:text-gray-900 hover:font-bold">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="mr-5 hover:text-gray-900 hover:font-bold">
                Contact Us
              </a>
            </Link>
          </nav>

          <div className="w-full md:w-auto md:ml-auto md:order-3 mt-4 md:mt-0 flex justify-end items-center">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow text-base text-gray-700 bg-gray-100 border border-gray-300 rounded py-2 px-4 mr-3 focus:outline-none focus:border-gray-500"
            />
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
              <IoCartOutline className="text-3xl" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
