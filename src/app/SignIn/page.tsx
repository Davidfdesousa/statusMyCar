import React from "react";

import "./styles.css";
import Link from "next/link";

export default function SignIn() {
  return (
    <article>
      <section className="smc-container">
        <div className="w-full lg:max-w-xl p-4 ">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
            Entrar
          </h2>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <label
                for-html="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for-html="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <Link href={"#"}>
                <p className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Esqueceu a senha?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entrar
            </button>
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
          </form>
        </div>
      </section>
    </article>
  );
}
