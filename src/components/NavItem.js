import Link from "next/link";

function NavItem({ name, href }) {
  return <Link href={href} className="hover:bg-gray-200 rounded-lg p-3">{name}</Link>;
};

export default NavItem;
