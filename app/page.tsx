"use client";
import { Dock } from "./components/dock/dock";
import { Cover } from "./components/cover/cover";
import { Showcase } from "./components/showcase/showcase";
import { Posts } from "./components/posts/posts";
import { Footer } from "./components/footer";
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (null); 
  }

  return (
    <div>
      <section className="bg-brown-100 text-white py-12">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
            Welcome to <Cover>Read A Kitaab Reading Community</Cover>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center relative z-20 pt-2 text-neutral-700 font-serif italic">
            Join our community of book lovers and writers to explore literature,
            share stories, and connect with like-minded individuals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a> */}
            <a href="https://readakitaab.com/join-us" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-12 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-60 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Join / Subscribe</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </div>
      </section>
      <Showcase />
      <Posts/>
      <Footer/>
      <Dock />
    </div>
  );
}

export default Home;