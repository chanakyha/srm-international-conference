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
            title: "Speakers",
            link: "/speakers",
        },
        {
            title: "Schedule",
            link: "/schedule",
        },
        {
            title: "Committee",
            link: "/commitee",
        },
        {
            title: "Call for Papers",
            link: "/papers",
        },
        {
            title: "Publication",
            link: "/",
        },
        {
            title: "Contact Us",
            link: "/contact",
        },
    ];
    return (
        <header className="font-montserrat sticky z-50 top-0 bg-white">
            <div className="p-4 container mx-auto flex items-center justify-between h-20">
                <Link href="/" className="flex items-center justify-center">
                    <span className="ml-4 uppercase font-black text-2xl">
                        ICACST-23
                    </span>
                </Link>
                <nav className="contents font-semibold ">
                    <ul className="mx-auto lg:flex items-center text-slate-300 hidden">
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
                </nav>
                <div className="lg:hidden">
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
                                            {NAVLINKS.map(
                                                ({ title, link }, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="p-2 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
                                                    >
                                                        <Link href={link}>
                                                            <span>{title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </nav>
                                    <Button className="w-full">
                                        <span className="text-mont">
                                            Register
                                        </span>
                                    </Button>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
    
                <div>
                    {session ? (
                        <Button className="font-bold px-8 py-2 lg:flex flex-row hidden" onClick={() => signOut()}><span className="text-mont">Logout</span></Button>
                    ) : (
                        <Button className="font-bold px-8 py-2 lg:flex flex-row hidden" onClick={() => signIn("google")}><span className="text-mont">Login</span></Button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
