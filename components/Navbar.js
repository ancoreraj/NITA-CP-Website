import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex p-3 items-center flex-row justify-between px-10 align-cente bg-gray-100 stickynav ">
      <Link href="/">
        <a>
          <div className="text-3xl cursor-pointer text-purple-900 font-semibold">NITA-CP</div>
        </a>
      </Link>
      <div className="w-2/4">
        <ul className="flex flex-wrap justify-between text-xl ">
          <li className="navhome">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

            {/* Practice page will be added later */}

          {/* <li>
            <Link href="/practice">
              <a>Practice</a>
            </Link>
          </li> */}
          <li>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/a2oj">
              <a>A2OJ</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
