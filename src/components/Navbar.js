import Image from "next/image";
import Link from "next/link";

import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/HP_-_Harry_Potter_wordmark.svg"
          alt="HP Logo"
          className="w-20"
          width={80}
          height={80}
        />
      </Link>
      <ul className="flex justify-end gap-3 list-none">
        <NavItem name="Houses" href="/houses" />
        <NavItem name="Books" href="/books" />
      </ul>
    </nav>
  );
};

export default Navbar;
