// pages/dashboard.tsx

import { db } from "@/backend/firebase";
import AddPaperDialog from "@/components/dashboard/AddPaperDialog";
import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

import AddAuthorsDialog from "@/components/dashboard/AddAuthorsDialog";
import TableData from "@/components/dashboard/TableData";
import CommentsSection from "@/components/dashboard/CommentsSection";

interface User {
  email: string;
  registered: boolean;
  name: string;
  mobile: string;
  category: string;
  organization: string;
  picture: string;
}

interface DashboardProps {
  user: User | null;
}

function Dashboard({ user }: DashboardProps) {
    console.log(user)
  return (
    <LandingPageLayout>
      <main className="min-h-[calc(100vh-5rem)] font-montserrat ">
        <section>
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
                      <span className="text-gray-500">
                        {" "}
                        {user?.email}{" "}
                      </span>
                    </p>
                  </div>
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
                {!false ? <AddPaperDialog /> : <AddAuthorsDialog />}
                <Button onClick={()=>signOut()} variant={"outline"}>Logout</Button>
              </div>
              <div>
                <TableData/>
              </div>
              <div>
                <CommentsSection/>
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
      ...user,
    },
  };
}

export default Dashboard;
