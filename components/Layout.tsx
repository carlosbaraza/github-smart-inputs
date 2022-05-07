import React, { FC } from "react";
import { Navbar } from "./Navbar";

type Props = {};

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="Layout flex min-h-screen flex-col bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto flex-grow px-4">
          <div className="sticky w-full">
            <Navbar />
          </div>
          <main role="main" className="w-full">
            {props.children}
          </main>
        </div>

        <footer className="mt-auto bg-gray-300 py-4 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          <a
            className="flex items-center justify-center gap-2"
            href="https://carlosbaraza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted by <strong>@carlosbaraza</strong>
          </a>
        </footer>
      </div>

      <style jsx>{`
        .Layout {
        }
      `}</style>
    </>
  );
};
