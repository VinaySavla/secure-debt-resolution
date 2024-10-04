import React from 'react';

const PropertyCard = ({ type, location, startingPrice }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex shrink-0 bg-black h-[175px] w-[175px]" />
      <div className="self-center mt-5">
        {type} <br />
        {location} <br />
        Starting from <br />
        ₹{startingPrice}{" "}
      </div>
    </div>
  );
};

export default PropertyCard;