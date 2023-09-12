import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <section className="min-h-[calc(100vh-150px)] w-full flex justify-center items-center bg-[url('/assets/Hero.svg')]">
        <div className="container mx-auto flex flex-col items-center justify-center w-3/4 gap-4">
            <div className='text-xl flex flex-col uppercase tracking-widest font-medium text-center'>
                <span>SRM INSTITUTE of science and technology , Ramapuram</span>
                <span>Department of computer science and engineering</span>
            </div>
            <h1 className="text-7xl font-black">ICACST-23</h1>
            <div className='text-center'>
                <p className='font-mono text-xl tracking-[0.4rem]'>International Conference on Advances in <br/> Computer Science and Technologies</p>
            </div>
            <Button className='bg-black  text-white rounded-md font-bold px-8 py-2 '>View Schedule</Button>
        </div>
    </section>
  )
}

export default Hero