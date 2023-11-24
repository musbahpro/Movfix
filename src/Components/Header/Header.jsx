"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import MobileNav from "./MobileNav";

const Links = [
  { id: 1, li: "HOME", url: "/" },
  { id: 2, li: "MOVIE", url: "/Movie" },
  { id: 4, li: "PRICING", url: "/Pricing" },
  { id: 5, li: "CONTACTS", url: "/Contacts" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-20 ">
      <div className="relative py-6 flex lg:justify-evenly lg:px-0 px-12 justify-between transition-all">
        <Image src={Logo} alt="Logo" width={120} />
            {/* Desktop Navbar*/}
        <nav className="hidden md:flex gap-8 capitalize">
          {Links.map(({ id, li, url }) => (
            <Link key={id} href={url}>
              {li}
            </Link>
          ))}
        </nav>
        {/* Mobile Navbar*/}
        <MobileNav/>
      </div>
    </header>
  );
}
