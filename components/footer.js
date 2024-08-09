import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="cursor-pointer flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/logo.svg" alt="logo" className="size-2/6" />
            <span className="font-bold ml-1 text-xl">Dapper.</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Elevate Your Style, Effortlessly
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              QUICK
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="cursor-pointer text-gray-400 hover:text-gray-900">About Us</a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-400 hover:text-gray-900">Contact Us</a>
              </li>
              {/* <li>
                <a className="cursor-pointer text-gray-400 hover:text-gray-900">Third Link</a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-400 hover:text-gray-900">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <Link href="/hoodies" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Hoodies</a>
                </li>
              </Link>
              <Link href="/jackets" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Jackets</a>
                </li>
              </Link>
              <Link href="/jeans" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Jeans</a>
                </li>
              </Link>
              <Link href="/pants" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Pants</a>
                </li>
              </Link>
              <Link href="/shorts" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Shorts</a>
                </li>
              </Link>
              <Link href="/sweaters" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">Sweaters</a>
                </li>
              </Link>
              <Link href="/t-shirts" legacyBehavior>
                <li>
                  <a className="cursor-pointer text-gray-400 hover:text-gray-900">T-Shirts</a>
                </li>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Dapper — Elevate Your Style, Effortlessly
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="cursor-pointer text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="cursor-pointer ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="cursor-pointer ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
