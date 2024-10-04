/**
 * This code was generated by Builder.io.
 */
import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <main className="flex overflow-hidden text-sm bg-white text-zinc-500">
      <section className="flex flex-col flex-1 shrink justify-center items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <h1 className="py-2 text-2xl font-semibold tracking-tight leading-none whitespace-nowrap text-zinc-950">
          Login
        </h1>
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
