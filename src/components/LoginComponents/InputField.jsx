/**
 * This code was generated by Builder.io.
 */
import React from 'react';

function InputField({ type, placeholder, ariaLabel }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="overflow-hidden self-stretch px-3 py-2 w-full bg-white rounded-md border border-solid shadow-sm border-zinc-200 min-h-[36px] mb-2"
    />
  );
}

export default InputField;