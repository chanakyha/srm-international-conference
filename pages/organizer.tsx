import DashCards from "@/components/organizer/DashCards";
import PaperTableData from "@/components/organizer/PaperTableData";
import PaymentTableData from "@/components/organizer/PaymentTableData";
import ReviewerTableData from "@/components/organizer/ReviewerTableData";
import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Organizer() {
  const { data: session } = useSession();
  return (
    <LandingPageLayout>
      <main className="min-h-[calc(100vh-5rem)] font-montserrat ">
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
                      src={session?.user?.image!}
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="ms-2 hidden text-left text-xs sm:block">
                      <strong className="block font-bold">
                        {session?.user?.name}
                      </strong>
                      <span className="text-gray-500">
                        {" "}
                        {session?.user?.email}{" "}
                      </span>
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
                  Organizer Dashboard
                </h1>
              </div>
              <div>
                <DashCards />
              </div>
              <div>
                <Tabs defaultValue="Assign" className="">
                  <TabsList className="my-4">
                    <TabsTrigger value="Assign">Assign Reviewers</TabsTrigger>
                    <TabsTrigger value="Details">
                      Reviewers Details
                    </TabsTrigger>
                    <TabsTrigger value="Payment">Payment Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="Assign">
                    <PaperTableData />
                  </TabsContent>
                  <TabsContent value="Details">
                    <ReviewerTableData />
                  </TabsContent>
                  <TabsContent value="Payment">
                    <PaymentTableData />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </header>
        </section>
      </main>
    </LandingPageLayout>
  );
}

export default Organizer;
