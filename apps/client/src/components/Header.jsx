import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/vote", title: "Vote" },
  { to: "/results", title: "Results" },
  { to: "/login", title: "Login" },
  { to: "/signup", title: "Register" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-xl font-bold tracking-wide">
          Vote<span className="text-indigo-500">App</span>
        </h1>

        <nav className="space-x-8 text-sm font-medium max-md:hidden">
          {links.map((link) => (
            <HeaderLink key={link.title} {...link} />
          ))}
        </nav>

        <button className="text-2xl md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3 bg-gray-800 px-4 pb-4 text-sm md:hidden">
          {links.map((link) => (
            <HeaderLink key={link.title} {...link} />
          ))}
        </div>
      )}
    </header>
  );
}

function HeaderLink({ to, title }) {
  return (
    <Link to={to} className="transition-colors hover:text-indigo-400">
      {title}
    </Link>
  );
}
