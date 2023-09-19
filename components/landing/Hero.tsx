import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';


function Hero() {
  const router = useRouter();
  return (
    <section className="min-h-[calc(100vh-5rem)] w-full flex justify-center items-center bg-no-repeat bg-fill md:bg-cover bg-bottom bg-[url('/assets/Hero.svg')]">
      <div className="flex flex-col items-center w-full gap-4 p-4 md:px-16">
        <Image
          src={"/assets/srmlogo.webp"}
          alt="SRMIST Logo"
          width={1000}
          height={1000}
          className=" h-auto w-96 lg:relative lg:bottom-10 md:ml-[12px] lg:mb-0"
        />
        <div className="text-xs md:text-base lg:text-3xl flex flex-col uppercase tracking-widest font-medium text-center">
          <span>SRM INSTITUTE of science and technology, Ramapuram</span>
          <span>Department of computer science and engineering</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-8xl font-black text-center text-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-400">
          ICACST &apos;23
        </h1>
        <div className="text-center">
          <p className="font-mono text-base lg:text-2xl tracking-wider font-semibold">
            International Conference on Advances in <br /> Computer Science and
            Technologies
          </p>
        </div>
        <Button
          asChild
          className="bg-black md:mx-auto md:w-fit text-white rounded-md font-bold px-8 py-2 "
        >
          <Link href="/schedule">View Brouchure</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero