import Image from 'next/image';
import React from 'react';
import Pic from '../public/assets/Pic.jpg';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import LandingPageLayout from '@/layout/LandingPageLayout';

interface SpeakerProps {
  name: string,
  desg: string,
  // url: string,
  // twitter: string,
  // linkedin: string,
}[];

const SPEAKERS: SpeakerProps[] = [
  {
    name: "Speaker 1",
    desg: "Designation",
  },
  {
    name: "Speaker 2",
    desg: "Designation",
  },
  {
    name: "Speaker 3",
    desg: "Designation",
  },
  {
    name: "Speaker 4",
    desg: "Designation",
  }
  
  
] 

function Speakers() {
  return (
    <LandingPageLayout>

    <div className="container  mx-auto w-full h-full">
    <h1 className='text-4xl font-bold text-center my-10'>Speakers</h1>
    <div className="flex flex-wrap gap-4 overflow-hidden p-10 h-full">
      {
            SPEAKERS.map((card,idx) => (

      
<div key={idx} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-1 transition-all duration-300 group ">
    <div className="flex flex-col items-center justify-center p-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Pic} alt="Pic"/>
        <h5 className="mb-1 text-lg font-medium ">{card.name}</h5>
        <span className="text-sm text-gray-500">{card.desg}</span>
        <div className="flex mt-4 space-x-3 md:mt-6 text-gray-500">
            <Twitter strokeWidth={1.5} className='w-5 h-5' />
            <Linkedin strokeWidth={1.5} className='w-5 h-5' />
        </div>
    </div>
</div>
            ))
          }
    </div>
  </div>
    </LandingPageLayout>
  )
}

export default Speakers