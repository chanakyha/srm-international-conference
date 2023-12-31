// pages/dashboard.tsx

import { db } from "@/backend/firebase";
import AddPaperDialog from "@/components/dashboard/AddPaperDialog";
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
  where,
} from "firebase/firestore";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

import AddAuthorsDialog from "@/components/dashboard/AddAuthorsDialog";
import TableData from "@/components/dashboard/TableData";
import CommentsSection from "@/components/dashboard/CommentsSection";
import { LogOutIcon } from "lucide-react";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import Head from "next/head";

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
  // console.log(user);
  // console.log(paper);
  // console.log(createdAt)
  // console.log(paper);
  useEffect(() => {
    // if (user?.paperId) {
    const unsub = onSnapshot(
      query(collection(db, "papers"), where("firstAuthor", "==", user?.email)),
      (docs) => {
        if (docs.docs.length === 0) setPaper(null);
        else setPaper({ id: docs.docs[0].id, ...docs.docs[0].data() });
      }
    );
    return () => unsub();
    // }
  }, []);
  return (
    <>
    <Head>
        <title>ICACST 2023 | Dashboard</title>
    </Head>
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
                        <strong className="block font-bold">
                          {user?.name}
                        </strong>
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
                {/* <div className="flex gap-2">
                {user?.paperUpload && <AddAuthorsDialog id={paper?.id} />}
              </div> */}
                {/* <div className="flex gap-2 flex-row">
                {user?.paperUpload && paper?.authors.length > 1 && (
                  <div className="flex gap-2">
                    {paper?.authors.map((author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined,idx: Key | null | undefined) => (
                      <div key={idx}>
                        <p className="text-sm">{idx != null ? (Number(idx) + 1) : ''} {author}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
                <div>
                  <TableData user={user} paper={paper} />
                </div>
                <div>
                  {user?.paperUpload && <CommentsSection paper={paper} />}
                </div>
              </div>
            </header>
          </section>
        </main>
      </LandingPageLayout>
    </>
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
