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
    // {
    //   title: "Registration",
    //   link: "/registration",
    // },
    {
      title: "Contact Us",
      link: "/#contact",
    },
  ];
  return (
    <header className="p-4 sticky top-0 bg-white z-50 flex items-center justify-between md:px-16 lg:max-w-8xl lg:mx-auto">
      <Link href={"/"}>
        <Image
          src={"/assets/icacst23-1.png"}
          alt="logo"
          width={1920}
          height={1080}
          className="w-48 h-full"
        />
      </Link>
      <div className="font-semibold">
        <ul className=" lg:flex text-center text-sm xl:text-base items-center text-slate-300 hidden">
          {NAVLINKS.map(({ title, link }, idx) => (
            <li
              key={idx}
              className="p-5 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
            >
              <Link href={link}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
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
                <Button
                  asChild
                  className="font-bold px-8 py-2 lg:flex flex-row hidden"
                  // onClick={() => signIn("google")}
                >
                  <Link href="/registration" className="text-mont">
                    Registration
                  </Link>
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:inline-flex">
        {/* {session ? (
    <Button
      className="font-bold px-8 py-2 lg:flex flex-row hidden"
      onClick={() => signOut()}
    >
      <span className="text-mont">Logout</span>
    </Button>
  ) : ( */}
        <Button
          asChild
          className="font-bold px-8 py-2 lg:flex flex-row hidden"
          // onClick={() => signIn("google")}
        >
          <Link href="/registration" className="text-mont">
            Registration
          </Link>
        </Button>
        {/* )} */}
      </div>
    </header>
  );
}

export default Header;
