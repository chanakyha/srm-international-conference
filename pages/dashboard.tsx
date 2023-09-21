// pages/dashboard.tsx

import { db } from "@/backend/firebase";
import AddPaperDialog from "@/components/organizer/AddPaperDialog";
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

import AddAuthorsDialog from "@/components/organizer/AddAuthorsDialog";
import TableData from "@/components/organizer/PaperTableData";
import CommentsSection from "@/components/organizer/CommentsSection";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [paper, setPaper] = useState<any>(null);
  console.log(user);
  // console.log(paper);
  // console.log(createdAt)

  useEffect(() => {
    if (user?.paperId) {
      const unsub = onSnapshot(doc(db, "papers", user?.paperId), (doc) => {
        if (doc.exists()) {
          setPaper({ data: doc.data(), id: doc.id });
        }
      });
      return () => unsub();
    }
  }, [user?.paperId]);
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
                  Dashboard
                </h1>
                {/* <p className="mt-1.5 text-sm text-gray-500">
                  Your website has seen a 52% increase in traffic in the last
                  month. Keep it up! 🚀
                </p> */}
              </div>
              <div className="flex gap-2">
                {user?.paperUpload && <AddAuthorsDialog />}
              </div>
              <div>
                <TableData user={user} paper={paper} />
              </div>
              <div>{user?.paperUpload && <CommentsSection />}</div>
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

  if (session?.user?.email === "srmtexus2k23@gmail.com") {
    return {
      redirect: {
        destination: "/organizer",
        permanent: false,
      },
    };
  }
  // if (docSnap.data()?.paperUpload) {
  //   const paperId = docSnap.data()?.paperId;
  //   const paperRef = doc(db, "papers", paperId);
  //   const paperSnap = await getDoc(paperRef);
  //   const paper: any = paperSnap.data();
  //   return {
  //   props: {
  //     paper: {
  //       ...paper,
  //       createdAt: (paper.createdAt as Timestamp).toDate().toLocaleString(),
  //     },
  //   },
  // };
  // }
  // else{
  //   return {
  //     props: {
  //       paper: null
  //     }
  //   }
  // }

  const user: any = session ? { user: docSnap.data() } : null;
  return {
    props: {
      ...user,
    },
  };
}

export default Dashboard;
