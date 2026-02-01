import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-lg">
        <ul className="flex items-center gap-2 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
