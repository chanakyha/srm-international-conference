import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  interface NavLinks {
    title: string;
    link: string;
  }
  [];

  const NAVLINKS: NavLinks[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Schedule",
      link: "/schedule",
    },
    {
      title: "Call for Papers",
      link: "/papers",
    },
    {
      title: "Publication",
      link: "/publications",
    },
    {
      title: "Committee",
      link: "/commitee",
    },
    {
      title: "Registration",
      link: "/registration",
    },
    {
      title: "Contact Us",
      link: "/#contact",
    },
  ];
  return (
    <header className="font-montserrat sticky z-50 top-0 border-b bg-white">
      <div className="p-4 md:px-16 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center justify-center">
           <Image
                                        src={"/assets/icacst23-1.png"}
                                        alt="SRMIST Logo"
                                        width={10000}
                                        height={10000}
                                        className=" h-auto w-48 md:ml-[12px] lg:mb-0"
                                    />
                            
                                </Link>
        <nav className="lg:flex w-full font-semibold hidden">
          <ul className="mx-auto lg:flex pl-10 justify-between w-full text-slate-300">
            {NAVLINKS.map(({ title, link }, idx) => (
              <li
                key={idx}
                className="p-5 uppercase active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
              >
                <Link href={link}>
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:hidden block ml-auto">
          <Sheet>
            <SheetTrigger>
              <Menu strokeWidth={1.5} size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>ICACST-23</SheetTitle>
                <SheetDescription>
                  <nav className="contents font-semibold ">
                    <ul className="mx-auto flex flex-col items-center text-slate-300">
                      {NAVLINKS.map(({ title, link }, idx) => (
                        <li
                          key={idx}
                          className="p-2 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
                        >
                          <Link href={link}>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
            
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
