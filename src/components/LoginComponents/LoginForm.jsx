/**
 * This code was generated by Builder.io.
 */
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import TermsAndPolicy from "./TermsAndPolicy";

function LoginForm() {
  return (
    <form className="flex flex-col mt-6 max-w-full leading-none whitespace-nowrap w-[350px]">
      <div className="flex flex-col w-full">
        <InputField
          type="email"
          placeholder="name@example.com"
          ariaLabel="Email"
        />
        <InputField
          type="password"
          placeholder="password"
          ariaLabel="Password"
        />
        <Button>Continue</Button>
      </div>
      <TermsAndPolicy />
    </form>
  );
}

export default LoginForm;
