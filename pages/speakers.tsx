import Image from 'next/image';
import React from 'react';
import Pic from '../public/assets/Pic.jpg';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

interface SpeakerProps {
  key: number,
  title: string,
  desc: string,
  pos: string,
}[];

const SPEAKERS: SpeakerProps[] = [
  {
    key: 1,
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

function Speakers() {
  return (
    <div className="container  mx-auto w-full h-full">
    <h1 className='text-4xl font-bold text-center my-10'>Speakers</h1>
    <div className="flex flex-wrap gap-4 overflow-hidden p-10 h-full">
      {
            SPEAKERS.map((card,idx) => (

      
<div key={idx} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-105 group ">
    <div className="flex flex-col items-center p-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Pic} alt="Pic"/>
        <h5 className="mb-1 text-xl font-medium  ">Bonnie Green</h5>
        <span className="text-sm text-gray-500 group-hover:text-white ">Visual Designer</span>
        <div className="flex mt-4 space-x-3 md:mt-6 text-gray-500 group-hover:text-white">
            <Twitter className='w-5 h-5' />
            <Linkedin className='w-5 h-5' />
        </div>
    </div>
</div>

      // </div>
            ))
          }

      
    </div>
  </div>
  )
}

export default Speakers