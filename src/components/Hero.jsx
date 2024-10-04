/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col self-center mt-14 max-w-full w-full max-md:mt-10">
      <div className="flex flex-col w-full text-center text-black max-md:max-w-full">
        <h1 className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Discover the perfect mortgage Properties
        </h1>
        <p className="mt-6 text-lg max-md:max-w-full">
          Find the best deals on mortgage Properties from top banks.
        </p>
      </div>
      <div className="flex gap-4 items-start self-center pt-4 mt-6 text-base text-white whitespace-nowrap">
        <Link
          to="/explore"
          className="gap-2 self-stretch px-6 py-3 bg-blue-600 max-md:px-5"
        >
          Explore
        </Link>
      </div>
    </section>
  );
};

export default Hero;
