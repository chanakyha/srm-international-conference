import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from './ui/button';

function Header() {


  const router = useRouter();

    interface NavLinks {
        title: string,
        link: string,
    }[];

    const NAVLINKS: NavLinks[] = [
        {
            title:"Speakers",
            link:"/speakers",
        },
        {
            title:"Schedule",
            link:"/schedule",
        },
        {
            title:"Committee",
            link:"/",
        },
        {
            title:"Call for Papers",
            link:"/",
        },
        {
            title:"Publication",
            link:"/",
        },
        {
            title:"Contact Us",
            link:"/contact",
        },
    ] 
  return (
    <header className="font-montserrat sticky z-50 top-0 bg-white">
  <div className=" py-6 px-12 container mx-auto flex items-center justify-center h-20">
    <Link href="/" className="flex items-center justify-center">
      <span className="ml-4 uppercase font-black text-2xl">ICACST-23</span>
    </Link>
    <nav className="contents font-semibold ">
      <ul className="mx-auto md:flex items-center text-slate-300  hidden">
        {
          NAVLINKS.map(({title,link},idx) => (

        <li 
        key={idx}
        className="p-5 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400">
          <Link 
            href={link}>
            <span>{title}</span>
          </Link>
        </li>
          ))
        }
      </ul>
    </nav>
    <Button className="bg-black  text-white rounded-md font-bold px-8 py-2 md:flex flex-row hidden">
      <span 

      className='text-mont '>Register</span>
    </Button>
  </div>
  
</header>
  )
}

export default Header