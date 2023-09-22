// pages/dashboard.tsx

import { db } from "@/backend/firebase";
import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ReviewTableData from "@/components/dashboard/ReviewTableData";

interface User {
  email: string;
  registered: boolean;
  name: string;
  mobile: string;
  category: string;
  organization: string;
  picture: string;
  paperUpload: boolean;
  paperId: string;
}

interface DashboardProps {
  user: User | null;
}

function Dashboard({ user }: DashboardProps) {
  console.log(user);
  
  return (
    <LandingPageLayout>
      <main
        suppressHydrationWarning
        className="min-h-[calc(100vh-5rem)] font-montserrat "
      >
        <section suppressHydrationWarning>
          <header className="">
            <div className="mx-auto flex flex-col gap-8 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex items-center sm:justify-between sm:gap-4">
                <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                  <div className="group flex shrink-0 items-center rounded-lg transition">
                    <Image
                      alt="Photo"
                      width={100}
                      height={100}
                      src={user?.picture!}
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="ms-2 hidden text-left text-xs sm:block">
                      <strong className="block font-bold">{user?.name}</strong>
                      <span className="text-gray-500"> {user?.email} </span>
                    </p>
                  </div>
                </div>
                <div>
                  <Button onClick={() => signOut()} variant={"ghost"}>
                    <LogOutIcon />
                  </Button>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Reviewer Dashboard
                </h1>
              </div>
              <div>
                <ReviewTableData/>
              </div>
              {/* <div>{user?.paperUpload && <CommentsSection />}</div> */}
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
  const docRef = doc(db, "reviewers", email!);
  const docSnap = await getDoc(docRef);

  if (session?.user?.email === "srmtexus2k23@gmail.com") {
    return {
      redirect: {
        destination: "/organizer",
        permanent: false,
      },
    };
  }
  

  const user: any = session ? { user: docSnap.data() } : null;
  return {
    props: {
      ...user,
    },
  };
}

export default Dashboard;
