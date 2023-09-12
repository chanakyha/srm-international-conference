import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <section className="min-h-[calc(100vh-150px)] w-full flex justify-center items-center bg-bottom bg-[url('/assets/Hero.svg')]">
        <div className="flex flex-col w-full gap-4 p-4 md:px-16">
            <div className='text-xs md:text-base lg:text-xl flex flex-col uppercase tracking-widest font-medium text-center'>
                <span>SRM INSTITUTE of science and technology , Ramapuram</span>
                <span>Department of computer science and engineering</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-black text-center">ICACST-23</h1>
            <div className='text-center'>
                <p className='font-mono text-base lg:text-lg tracking-wider'>International Conference on Advances in <br/> Computer Science and Technologies</p>
            </div>
            <Button className='bg-black md:mx-auto md:w-fit text-white rounded-md font-bold px-8 py-2 '>View Schedule</Button>
        </div>
    </section>
  )
}

export default Hero