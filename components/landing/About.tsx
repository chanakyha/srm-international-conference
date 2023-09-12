import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function About() {
  return (
    <section>
        <div className='container mx-auto flex flex-col items-center justify-center w-3/4 gap-4 my-10'>
            <h1 className='text-4xl font-bold tracking-wider'>Scope of ICACST</h1>
            <div className='bg-gray-800 h-[2px] w-1/2'/>
            <p className='text-xl font-medium text-justify'>The International Conference on Advances in Computer Science and Technologies (ICACST) is a premier forum for the presentation of new advances and research results in the field of Computer Science and Technologies. The conference will bring together leading academic scientists, researchers and scholars in the domain of interest from around the world.</p>
        </div>
        <div className='container mx-auto flex flex-col items-center justify-center w-3/4 gap-4 my-10'>
            <h1 className='text-4xl font-bold tracking-wider'>About SRMIST</h1>
            <div className='bg-gray-800 h-[2px] w-1/2'/>
            <p className='text-xl font-medium text-justify'>SRM Institute of Science and Technology (formerly known as SRM University) is one of the top ranking universities in India with over 20,000 students and 1,500 faculty, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering, Management, Medicine and Health sciences, Science and Humanities.</p>
            <Link href="https://srmrmp.edu.in/" target={'_blank'}><Button className='bg-black  text-white rounded-md font-bold px-8 py-2 '>More About SRM</Button></Link>
        </div>
        <div className='container mx-auto flex flex-col items-center justify-center w-3/4 gap-4 my-10'>
            <h1 className='text-4xl font-bold tracking-wider'>About CSE</h1>
            <div className='bg-gray-800 h-[2px] w-1/2'/>
            <p className='text-xl font-medium text-justify'>The department of Computer Science and Engineering (CSE) at SRM Institute of Science and Technology was established in the year 2004 with the aim of imparting quality education to students and bring out the best in them. The key goal of the department is to provide best IT infrastructure, world class learning and research environment, adopt industry practices through industry collaborations and inculcate moral and ethical values. With students hailing from all States and union territories of India, the department was established to meet the demand for well-qualified computer professionals. The promptness of the students to learn makes it easier for the industry-trained experienced faculty to produce top-notch engineers who are being recruited by reputed companies all over the world. The department is renowned for imparting state of the art undergraduate education and preparing its students for real world challenges. The department is accredited by NAAC as Grade A++ and placed by MHRD in category A. Our alumni have done extremely well which include managing top companies, designing revolutionary products, and contributing to fundamental research.</p>
            <h1 className='text-2xl font-bold tracking-wider'>Vision</h1>
            <p className='text-xl font-medium text-justify'>To become a world class department in imparting high quality knowledge and in providing students a unique learning and research experience in Computer Science and Engineering.</p>
            <h1 className='text-2xl font-bold tracking-wider'>Mission</h1>
            <ul className='list-disc'>
                <li className='text-xl font-medium text-justify'>To impart knowledge in cutting edge technologies on part with industrial standards.</li>
                <li className='text-xl font-medium text-justify'>To collaborate with renowned academic institutions in research and development.</li>
                <li className='text-xl font-medium text-justify'>To instill societal and ethical responsibilities in all professional activities.</li>
            </ul>
            <Link href="https://srmrmp.edu.in/academics/department-of-computer-science-and-engineering/" target={'_blank'}><Button className='bg-black text-white rounded-md font-bold px-8 py-2 '>More About CSE</Button></Link>
        </div>
    </section>
  )
}

export default About