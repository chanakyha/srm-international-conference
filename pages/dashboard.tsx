// pages/dashboard.tsx

import { db } from "@/backend/firebase";
import AddPaperDialog from "@/components/dashboard/AddPaperDialog";
import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { getSession } from "next-auth/react";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface User {
    email: string;
    registered: boolean;
    name: string;
    mobile: string;
    category: string;
    organization: string;
}

interface DashboardProps {
    user: User | null;
}

function Dashboard({ user }: DashboardProps) {
    return (
        <LandingPageLayout>
            <main className="min-h-[calc(100vh-5rem)] bg-green-500">
                <section>
                    <header className="bg-gray-50">
                        <div className="mx-auto flex flex-col gap-8 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                            <div className="flex items-center sm:justify-between sm:gap-4">
                                <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                                    <button
                                        type="button"
                                        className="group flex shrink-0 items-center rounded-lg transition"
                                    >
                                        <Image
                                            alt="Man"
                                            width={10}
                                            height={10}
                                            src="/assets/Pic.jpg"
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <p className="ms-2 hidden text-left text-xs sm:block">
                                            <strong className="block font-medium">
                                                Eric Frusciante
                                            </strong>
                                            <span className="text-gray-500">
                                                {" "}
                                                eric@frusciante.com{" "}
                                            </span>
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Dashboard
                                </h1>
                                <p className="mt-1.5 text-sm text-gray-500">
                                    Your website has seen a 52% increase in
                                    traffic in the last month. Keep it up! 🚀
                                </p>
                            </div>
                            <div className="">
                                <AddPaperDialog />
                            </div>
                            <div>
                                <Table>
                                    <TableCaption>
                                        A list of your recent invoices.
                                    </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">
                                                Invoice
                                            </TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Method</TableHead>
                                            <TableHead className="text-right">
                                                Amount
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">
                                                INV001
                                            </TableCell>
                                            <TableCell>Paid</TableCell>
                                            <TableCell>Credit Card</TableCell>
                                            <TableCell className="text-right">
                                                $250.00
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </header>
                </section>
            </main>
        </LandingPageLayout>
    );
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    const email = session?.user?.email;
    const docRef = doc(db, "users", email!);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()?.registered) {
        return {
            redirect: {
                destination: "/register",
                permanent: false,
            },
        };
    }

    const user: any = session ? { user: docSnap.data() } : null;

    return {
        props: {
            user,
        },
    };
}

export default Dashboard;
