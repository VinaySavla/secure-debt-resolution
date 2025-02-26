/**
 * This code was generated by Builder.io.
 */
import React from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FARM", location: "Mumbai", startingPrice: "_________" },
  { type: "APPARTMENT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
  { type: "FLAT", location: "Mumbai", startingPrice: "_________" },
];

const PropertyGrid = () => {
  return (
    <section className="flex flex-wrap gap-10 pl-14 mt-4 w-full text-base font-bold leading-5 text-center text-black bg-zinc-300 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
