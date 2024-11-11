import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <article>
      <section className="smc-container flex-1 items-center justify-center flex-col">
        <h1 className="text-xl mb-4">Status My car</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/SignUp"} className="text-cyan-50">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>

          <Link href={"/SignIn"} className="text-cyan-50">
            <button
              type="button"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Registrar-se
            </button>
          </Link>
        </div>
      </section>
    </article>
  );
}
