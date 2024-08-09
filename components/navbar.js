import React, { useRef, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import Head from "next/head";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  //console.log(cart,addToCart,removeFromCart,clearCart,subTotal)
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
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

            <button
              onClick={toggleCart}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              <IoCartOutline className="text-3xl" />
            </button>
            {/* //                                          top-36 right-15 */}
            <div
              ref={ref}
              className="cart absolute z-50 top-5 right-5 bg-gray-100 p-5 rounded shadow-lg w-fit h-auto transform transition-transform translate-x-full"
            >
              <IoMdCloseCircle
                onClick={toggleCart}
                className="text-red-600 text-lg cursor-pointer absolute m-0 p-0 right-2 top-2"
              />

              <div className="title&btn flex justify-between">
                <h3 className="font-bold">Shopping Cart</h3>
              </div>
              {Object.keys(cart).length ===0 && <div>Your Cart is empty.</div>}
              {Object.keys(cart).map((k) => {
                return (
                  <div key={k} className="items mt-2 flex">
                    <div className=" w-full flex">
                      <a className="block relative  w-16 md:w-20 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src="https://outfitters.com.pk/cdn/shop/files/F0278107505M_2.jpg?v=1701232289"
                        />
                      </a>
                      <div className="px-3 md:px-8 mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {cart[k].variant}
                        </h3>
                        <h2 className="text-gray-900 title-font text-sm font-medium">
                        {cart[k].name}
                        </h2>
                        <p className="mt-1 text-sm">{cart[k].price}</p>
                      </div>
                    </div>
                    <div className="quantity flex items-center space-x-2">
                      <div onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer relative flex items-center justify-center h-5 w-5 md:h-8 md:w-8">
                        <span className="absolute inset-0 bg-green-500 rounded-full"></span>
                        <p className="select-none relative text-white font-extrabold text-lg md:text-xl">
                          +
                        </p>
                      </div>
                      <span className="text-gray-900 text-lg md:text-xl">
                        {cart[k].qty}
                      </span>
                      <div onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer relative flex items-center justify-center h-5 w-5 md:h-8 md:w-8">
                        <span className="absolute inset-0 bg-red-500 rounded-full"></span>
                        <p className="select-none relative text-white font-extrabold text-lg md:text-xl">
                          -
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={clearCart}
                className="mt-5 underline text-red-700 text-sm md:text-base"
              >
                Remove all
              </button>
              <hr className="mt-5 " />
              <div className="subtotal justify-between flex space-x-14">
                <div className="flex-col">
                  <h3 className="text-sm md:text-base">Sub-Total</h3>
                </div>
                <div className="text-lg md:text-xl">{cart.subTotal}</div>
              </div>
              <div className="delivery justify-between flex space-x-14">
                <div className="flex-col">
                  <h3 className="text-sm md:text-base">Delivery Charges</h3>
                </div>
                <div className="text-lg md:text-xl">$0</div>
              </div>
              <hr className=" " />
              <div className="total mt-2 justify-between flex space-x-14">
                <div className="flex-col">
                  <h3 className="text-lg md:text-2xl">Total</h3>
                </div>
                <div className="text-lg md:text-2xl">$0</div>
              </div>
              <Link href="/checkout">
                <button className="mt-5 inline-flex w-full text-white justify-center bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-base sm:text-lg md:text-lg">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
