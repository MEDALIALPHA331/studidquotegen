"use client";

import ThemeSwitch from "./theme";

function Nav() {
  return (
    <nav className="flex min-h-[20%] items-start justify-around rounded-md px-4 py-2">
      <ul className="flex items-center justify-center gap-1 shadow-lg shadow-black dark:shadow-slate-100">
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            g
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            a
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            k
          </a>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  );
}

export default Nav;
