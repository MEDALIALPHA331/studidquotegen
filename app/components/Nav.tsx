"use client";

import ThemeSwitch from "./theme";

function Nav() {
  return (
    <nav className="flex min-h-[20%] items-start justify-around ">
      <ul className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 shadow-md shadow-black dark:shadow-slate-100">
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-indigo-500 dark:fill-pink-200"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 8c0 .557-.447 1.008-1 1.008S8 8.558 8 8c0-.557.447-1.008 1-1.008S10 7.444 10 8zm0 2H8v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0V16H17v-3.359c0-3.284-3.128-3.164-4-1.548V10z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-indigo-500 dark:fill-pink-200"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 8c0 .557-.447 1.008-1 1.008S8 8.558 8 8c0-.557.447-1.008 1-1.008S10 7.444 10 8zm0 2H8v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0V16H17v-3.359c0-3.284-3.128-3.164-4-1.548V10z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-indigo-500 dark:fill-pink-200"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 10H8v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667H15V6h-2.404C10.798 6 10 6.792 10 8.308V10z"></path>
            </svg>
          </a>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  );
}

export default Nav;
