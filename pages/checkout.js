import React from 'react'

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
 
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    {/* Left Side: Delivery and Contact Details Form */}
    <div className="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Delivery Details</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please provide your delivery and contact information.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="phone" name="phone" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    </div>

    {/* Right Side: Order Summary */}
    <div className=" lg:w-1/3 md:w-1/2 lg:ml-4 md:ml-4 sm:ml-2 overflow-hidden p-4 flex items-end justify-start relative bg-gray-100 flex-wrap py-6 rounded shadow-md w-full">
        <div className="lg:w-full px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ORDER SUMMARY</h2>
          <p className="mt-1">Items you have added to your cart will appear here.</p>
          {/* List of products in the order summary */}
          
          <div className="my-4">
            {/* Example item in the order summary */}
            {Object.keys(cart).length === 0 && <div>Your Cart is empty.</div>}
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
                      <div
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer relative flex items-center justify-center h-5 w-5 md:h-8 md:w-8"
                      >
                        <span className="absolute inset-0 bg-green-500 rounded-full"></span>
                        <p className="select-none relative text-white font-extrabold text-lg md:text-xl">
                          +
                        </p>
                      </div>
                      <span className="text-gray-900 text-lg md:text-xl">
                        {cart[k].qty}
                      </span>
                      <div
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer relative flex items-center justify-center h-5 w-5 md:h-8 md:w-8"
                      >
                        <span className="absolute inset-0 bg-red-500 rounded-full"></span>
                        <p className="select-none relative text-white font-extrabold text-lg md:text-xl">
                          -
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            <div className="flex justify-between items-center border-t border-gray-300 pt-2 mt-2">
              <span className="text-gray-900 font-semibold">Total</span>
              
              <span className="text-gray-900 font-semibold">${subTotal}</span>
            </div>
          </div>
          {/* Proceed to Pay Button */}
          <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg w-full">Proceed to Pay</button>
        </div>
      </div>
    </div>
</section>

  )
}

export default Checkout