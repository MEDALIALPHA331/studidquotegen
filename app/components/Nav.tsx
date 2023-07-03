import ThemeSwitch from "./theme";

function Nav() {
  return (
    <nav className="flex min-h-[20%] items-start justify-around">
      <ul className="darkshadow-slate-100 flex items-center justify-center gap-1 shadow-lg shadow-black">
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
