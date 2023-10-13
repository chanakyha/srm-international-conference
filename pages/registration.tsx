import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import { signIn } from "next-auth/react";
import React from "react";

const Registration = () => {
  const registeration = [
    {
      title: "For Academicians, Students, Research Scholars",
      price: "₹1000",
    },
    {
      title: "For Industry Participants",
      price: "₹1500",
    },
    {
      title: "For Foreign Authors",
      price: "$25",
    },
  ];
  return (
    <LandingPageLayout>
      <div className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto min-h-[calc(100vh-400px)]">
        <h1 className="text-xl font-bold text-center my-10 uppercase">
          Registration
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {registeration.map((item, idx) => (
            // <div key={idx} className="p-4 bg-slate-50 shadow">
            //     <h1 className="">{item.title}</h1>
            //     <p className="font-semibold">{item.price}</p>
            // </div>
            <div key={idx} className="w-full lg:h-full">
              <div className="w-full h-full flex flex-col gap-4 bg-[url('/assets/CardWave.svg')] bg-opacity-5 bg-cover bg-bottom bg-no-repeat shadow-md rounded-md p-4 lg:p-8">
                <div className="text-center lg:text-left flex flex-col gap-2">
                  <p className="text-base lg:text-xl font-medium lg:w-44">
                    {item.title}
                  </p>
                  <h1 className="text-xl lg:text-2xl font-bold">
                    {item.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10  flex flex-col items-center">
          <div className="text-center space-y-5 w-full text-black rounded-md p-3 text-xl font-bold">
            {/* <p>Those who got acceptance, kindly register here</p>
            <p>👇</p> */}
            <Button
              onClick={() => signIn("google")}
              className="uppercase tracking-wider"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default Registration;
