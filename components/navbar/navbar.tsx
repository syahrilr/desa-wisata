import { Search } from "lucide-react";
import Link from "next/link";
import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "./logo";

const navList = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Obyek Wisata",
    href: "/obyek-wisata",
  },
  {
    name: "Fasilitas Wisata",
    href: "/fasilitas-wisata",
  },
  {
    name: "Pemesanan",
    href: "/pemesanan",
  },
  {
    name: "Galery",
    href: "/galery",
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-10 shadow-sm overflow-hidden">
      <Container>
        <div
          className="
            py-4
            border-b-[1px]
        "
        >
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
            "
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <Logo />
              <p className="font-bold text-green-dark text-xl">
                Inspirasi Wisata
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
              {navList.map((nav) => (
                <Button key={nav.name} variant="ghost" size="default">
                  <Link href={nav.href} className="uppercase font-bold text-sm">
                    {nav.name}
                  </Link>
                </Button>
              ))}
              <></>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
