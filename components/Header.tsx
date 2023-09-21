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
      <div className="p-2 md:px-16 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={"/assets/icacst23-1.png"}
            alt="SRMIST Logo"
            width={10000}
            height={10000}
            className=" h-auto w-48 md:ml-[12px] lg:mb-0"
          />
        </Link>
        <div>
          <span className="lg:text-base text-sm font-semibold">Administrator Website</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
