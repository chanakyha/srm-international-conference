import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

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
            title:"Contact Us",
            link:"/contact",
        },
    ] 
  return (
    <header className=" bg-opacity-5  shadow-lg">
  <div className=" py-6 px-12 container mx-auto flex items-center justify-center  h-20">
    <a href="" className="flex items-center justify-center">
      <span className="ml-4 font-mont uppercase font-bold text-2xl">ICACST-23</span>
    </a>
    <nav className="contents font-semibold ">
      <ul className="mx-auto md:flex items-center text-slate-300 text-mont hidden">
        {
          NAVLINKS.map(({title,link},idx) => (

        <li 
        key={idx}
        className="p-5 xl:p-8 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400">
          <Link 
            href={link}>
            <span>{title}</span>
          </Link>
        </li>
          ))
        }
      </ul>
    </nav>
    <button className="bg-black  text-white rounded-md font-bold px-8 py-2 md:flex flex-row  hidden">
      <span 
      onClick={() => router.push("/auth/login")}
      className='text-mont '>Register</span>
    </button>
  </div>
  
</header>
  )
}

export default Header