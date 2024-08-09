import Newsletter from '@/components/newsletter';
import React from 'react';
import Link from 'next/link';
import DynamicBreadcrumb from '@/components/dynamicbreadcrumb';
const Hoodies = () => {
  return (<>
  <DynamicBreadcrumb/>
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
        <Link href="/product/test" legacyBehavior><div className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full">
             <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0420107901_1.jpg?v=1703661513" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Colour Block Track Zipper Hoodie</h2>
              <p className="mt-1">$28.00</p>
            </div>
          </div></Link>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0080125725_2.jpg?v=1701926668" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">ACTIVEWEAR Hoodie</h2>
              <p className="mt-1">$32.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0323107618M_3.jpg?v=1703054333" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Dominance Graphic Hoodie</h2>
              <p className="mt-1">$25.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0137101901M_2.jpg?v=1700134937" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Cotton Zip-Up Hoodie</h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0309107915_1.jpg?v=1698124848" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Retro Graphic Hoodie</h2>
              <p className="mt-1">$22.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0307107524M_4.jpg?v=1696940763" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Peace Sign Printed Hoodie</h2>
              <p className="mt-1">$27.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0279107901M_2.jpg?v=1700646764" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Skull Print Hoodie</h2>
              <p className="mt-1">$30.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-65 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://outfitters.com.pk/cdn/shop/files/F0278107505M_2.jpg?v=1701232289" />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">HOODIES</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Solid Zipper Hoodie</h2>
              <p className="mt-1">$26.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Newsletter/>
    <hr className="m-5 " />
    </>
  );
}

export default Hoodies;
