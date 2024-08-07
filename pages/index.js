import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
            <h1 className="font-bold text-2xl title-font text-gray-900">
              Shop by Category
            </h1>
            <div className="hidden lg:block flex items-center mt-4 lg:mt-0">
              <Link href="/categories" legacyBehavior>
                <a className="font-medium cursor-pointer text-yellow-500 inline-flex items-center">
                  Browse all Categories
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
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
          </div>
          <div className="block lg:hidden flex items-center mt-4 lg:mt-0">
              <Link href="/categories" legacyBehavior>
                <a className="font-medium cursor-pointer text-yellow-500 inline-flex items-center">
                  Browse all Categories
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
        </div>
      </section>
      <Newsletter/>
    </div>
  );
}
