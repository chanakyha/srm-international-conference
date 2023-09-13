import LandingPageLayout from '@/layout/LandingPageLayout';
import React from 'react'

interface ScheduleProps {
  key: any,
  title: string,
  desc: string,
  pos: string,
}[];

const SCHEDULE: ScheduleProps[] = [
  {
    key: "08:00 AM",
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pos: "right-timeline",
  },
  {
    key: 2,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pos: "left-timeline",
  },
  {
    key: 3,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pos: "right-timeline",
  },
  {
    key: 4,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pos: "left-timeline",
  },
  
] 

function Schedule() {
  return (
    <LandingPageLayout>
      <div className="container  mx-auto w-full h-full">
          <h1 className="text-xl lg:text-4xl font-bold text-center my-10">Schedule</h1>
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
                          <h3 className="mb-3 font-bold  text-lg">
                              {card.title}
                          </h3>
                          <p className="text-sm leading-snug tracking-wide  text-opacity-100">
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
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                              {card.desc}
                          </p>
                      </li>
                  ))}
              </ol>
          </div>
      </div>
    </LandingPageLayout>
  );
}

export default Schedule