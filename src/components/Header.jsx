import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-16 w-full text-base min-h-[72px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-6 items-center self-stretch my-auto text-black whitespace-nowrap min-w-[240px] max-md:max-w-full">
        <a href='/'>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2bafb4e8503baed016efe47cc7dfafe9ba63cde48ce63f6acd76df0d39478e?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc" alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[2.33] w-[63px]" />
          </a>
        <nav className="flex overflow-hidden gap-8 items-start self-stretch my-auto min-w-[240px]">
          <Link to="/">Home</Link>
          <Link to="/listing">Listing</Link>
          <Link to="/bidding">Bidding</Link>
          <Link to="/about">About</Link>
          {/* <div className="flex gap-1 justify-center items-center">
            <Link to="/more">More</Link>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </div> */}
        </nav>
      </div>
      <div className="flex gap-4 justify-center items-center self-stretch my-auto rounded">
        <Link to="/login" className="gap-2 self-stretch px-5 py-2 my-auto text-blue-600 rounded border border-blue-600 border-solid">
          Log In
        </Link>
        <Link to="/signup" className="gap-2 self-stretch px-5 py-2 my-auto text-white bg-blue-600 rounded">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;