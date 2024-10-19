'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ name, href }) {
  const pathname = usePathname()
  const isActive = pathname === href;

  return <Link
    href={href}
    className={`${isActive ? "bg-gray-200" : "hover:bg-gray-200"} rounded-lg p-3`}>
    {name}
  </Link>;
};

export default NavItem;
