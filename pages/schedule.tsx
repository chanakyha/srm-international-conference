import { Button } from "@/components/ui/button";
import LandingPageLayout from "@/layout/LandingPageLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

interface ScheduleProps {
  key: any;
  title: string;
  desc: string;
  pos: string;
}
[];

const SCHEDULE: ScheduleProps[] = [
  {
    key: "15th Nov",
    title: "Paper Submission",
    pos: "right-timeline",
    desc: "Share your research with the world. Submit your papers within the deadline.",
  },
  {
    key: "20th Nov",
    title: "Notification of Acceptance",
    pos: "left-timeline",
    desc: "Notification of acceptance will be sent to the authors.",
  },
  {
    key: "25th Nov",
    title: "Camera Ready Copy Submission",
    pos: "right-timeline",
    desc: "Submit your camera ready copy within the deadline.",
  },
  {
    key: "30th Nov",
    title: "Paper Registration",
    pos: "left-timeline",
    desc: "Pay and register for the conference within the deadline.",
  },
  {
    key: "7th Dec",
    title: "Pre-conference Tutorial",
    pos: "right-timeline",
    desc: "Attend the pre-conference tutorial on the given date.",
  },
  {
    key: "8th Dec",
    title: "Conference Dates",
    pos: "left-timeline",
    desc: "Attend the conference on the given date.",
  },
];

function Schedule() {
  return (
    <>
      <Head>
        <title>ICACST 2023 | Schedule</title>
      </Head>
      <LandingPageLayout>
        <div className="container  mx-auto w-full h-full">
          <h1 className="text-xl lg:text-4xl font-bold text-center my-10">
            Schedule
          </h1>
          <div className="flex flex-col justify-center items-center gap-8">
            <div>
              <Button
                asChild
                className="bg-black md:mx-auto md:w-fit text-white rounded-md font-bold px-8 py-2 "
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8WYMvpmPI98jfIUjjRdXLpA6dbuFb0Bh_IjnM_wtTiwtO83FPEFtp0iH8Gzp3AkCDlYj2wiQYkQlE/pubhtml"
                >
                  Track 1 - Details
                </Link>
              </Button>
            </div>
            <div>
              <Button
                asChild
                className="bg-black md:mx-auto md:w-fit text-white rounded-md font-bold px-8 py-2 "
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTsEm6qh2TtU6PjteB-sM5RS1O-GP3u5iUFNZ5MQT6wXzjbPAA5yqDN7YlXu16Dx9uc0Cv5eoOZTQkz/pubhtml"
                >
                  Track 2 - Details
                </Link>
              </Button>
            </div>
            <div>
              <Button
                asChild
                className="bg-black md:mx-auto md:w-fit text-white rounded-md font-bold px-8 py-2 "
              >
                <Link
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3VBJ5dVVPQ8EEXqpvKZO8QVcDmqhgcpanSJI7SF4K2uMqLO4rYyrGNII2CRypo5-aohwE1TjatJgO/pubhtml"
                >
                  Track 3 - Details
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative wrap overflow-hidden p-10 h-full md:block hidden">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
            {SCHEDULE.map((card, idx) => (
              <div
                key={idx}
                className={`mb-8 flex justify-between items-center w-full ${
                  card.pos === "left-timeline" ? "flex-row-reverse" : ""
                } ${card.pos}`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl py-2 px-4  rounded-full">
                  <h1 className="mx-auto font-semibold text-base text-white">
                    {card.key}
                  </h1>
                </div>
                <div className="order-1 bg-stone-100 text-gray-800 rounded-lg shadow-md w-5/12 px-6 py-4 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold  text-lg">{card.title}</h3>
                  <p className="text-sm tracking-wide text-gray-500">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden block">
            <ol className="relative border-l border-gray-200 ">
              {SCHEDULE.map((card, idx) => (
                <li key={idx} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                  <span className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                    {card.key}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    {card.title}
                  </h3>
                  {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                              {card.desc}
                          </p> */}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </LandingPageLayout>
    </>
  );
}

export default Schedule;
