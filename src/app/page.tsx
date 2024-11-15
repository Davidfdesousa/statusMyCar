import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <article>
      <section className="smc-container">
        <div className="container mx-auto">
          <div
            className="max-w-sm mx-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="text-xl mb-4">Status My car</h1>

            <Link href={"/SignIn"} className="text-cyan-50">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40 mb-4"
              >
                Login
              </button>
            </Link>


            <div className="text-sm font-medium text-gray-900 dark:text-white">
              <p>
                Ainda não tem uma conta?{" "}
                <Link href={"/SignUp"}>
                  <span className="text-blue-600 hover:underline dark:text-blue-500">
                    Criar conta
                  </span>
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
