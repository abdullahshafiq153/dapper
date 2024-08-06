import React from 'react';
import Link from 'next/link';

const Categories = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-10 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-yellow-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Explore Our Collections</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Discover a variety of categories, each offering unique styles and designs to elevate your wardrobe.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Hoodies" className="object-cover object-center h-full w-full" src="/hoodies.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Hoodies</h2>
            <p className="text-base leading-relaxed mt-2">Stay cozy and on-trend with our range of premium hoodies. Perfect for every casual occasion.</p>
            <Link href="/hoodies" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3">Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Jackets" className="object-cover object-center h-full w-full" src="/jackets.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Jackets</h2>
            <p className="text-base leading-relaxed mt-2">Find the perfect jacket for any season. Trendy, functional, and essential for every wardrobe.</p>
            <Link href="/jackets" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Jeans" className="object-cover object-center h-full w-full" src="/jeans.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Jeans</h2>
            <p className="text-base leading-relaxed mt-2">Discover our versatile range of jeans for every style. Comfortable and stylish for everyday wear.</p>
            <Link href="/jeans" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Pants" className="object-cover object-center h-full w-full" src="/pants.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pants</h2>
            <p className="text-base leading-relaxed mt-2">Versatile and stylish pants for any occasion. Elevate your look with our curated selection.</p>
            <Link href="/pants"legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Shorts" className="object-cover object-center h-full w-full" src="/shorts.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shorts</h2>
            <p className="text-base leading-relaxed mt-2">Beat the heat with our stylish shorts. Ideal for warm weather and casual outings.</p>
            <Link href="/shorts" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="Sweaters" className="object-cover object-center h-full w-full" src="/sweaters.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Sweaters</h2>
            <p className="text-base leading-relaxed mt-2">Stay warm and stylish with our collection of cozy sweaters. Perfect for colder days.</p>
            <Link href="/sweaters" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-120 overflow-hidden">
              <img alt="T-Shirts" className="object-cover object-center h-full w-full" src="/tshirts.jpg" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">T-Shirts</h2>
            <p className="text-base leading-relaxed mt-2">Essential and versatile t-shirts for every look. Comfortable and fashionable for everyday wear.</p>
            <Link href="/tshirts" legacyBehavior><a className="text-yellow-500 inline-flex items-center mt-3" >Shop Now
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
