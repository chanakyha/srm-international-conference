import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

function Banner() {
  return (
    <>
      {/* <section className="flex w-full my-10 lg:max-w-6xl lg:mx-auto">
                <div className="rounded-md bg-slate-200/40 shadow-md shadow-slate-800/20 text-center p-4 lg:p-12 space-y-2">
                    <h1 className="text-base font-semibold lg:text-2xl">
                        Join us on
                    </h1>
                    <h1 className="text-xl lg:text-4xl font-bold tracking-widest">
                        08 December 2023
                    </h1>
                    <span className="font-semibold lg:text-2xl text-slate-700">
                        at
                    </span>
                    <h1 className="text-lg lg:text-4xl font-bold tracking-wide">
                        SRM Institute of Science and Technology, Ramapuram
                    </h1>
                    <p className="text-base lg:text-xl text-slate-700 font-medium">
                        Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089
                    </p>
                </div>
            </section> */}
      <section className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto my-10">
        <div className="w-full flex flex-col gap-4 bg-[url('/assets/Wave.svg')] bg-cover bg-center bg-no-repeat shadow-md rounded-md p-4 lg:p-12">
          <div className="text-center lg:text-left lg:w-2/3 flex flex-col gap-2">
            <p className="text-base lg:text-xl font-medium">Join us on</p>
            <h1 className="text-2xl lg:text-4xl font-bold">29 December 2023</h1>
            <p className="text-base lg:text-2xl font-bold">
              SRM Institute of Science and Technology, Ramapuram
            </p>
            <p className="text-base lg:text-lg font-medium">
              Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089
            </p>
          </div>
          <div className="w-full lg:w-1/3 md:flex md:justify-center lg:justify-start">
            <Button
              onClick={() => signIn("google")}
              className="w-full md:w-fit font-bold"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
