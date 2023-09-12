import React from 'react'

function Banner() {
  return (
    <section className='flex justify-center items-center w-full my-10'>
        <div className='w-10/12 rounded-md bg-stone-200 shadow-md text-center p-10 space-y-4'>
            <h1 className='text-2xl font-bold'>Join us on</h1>
            <h1 className='text-4xl font-bold tracking-widest'>08 December 2023</h1>
            <span className='text-xl font-medium'>at</span>
            <h1 className='text-4xl font-bold tracking-wide'>SRM Institute of Science and Technology, Ramapuram</h1>
            <p className='text-xl font-medium'>Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089</p>
        </div>
    </section>
  )
}

export default Banner