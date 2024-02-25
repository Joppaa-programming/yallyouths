"use client"; // th
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavBar from './mobileNav';
import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../assets/yall.png';
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  }
  return (
    <>

      <nav className=" px-2 sm:px-4  bg-slate-50 fixed w-full z-20 top-0 left-0 shadow-sm ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
          <Image className='rounded-xl' src={Logo} alt='logo' width={90} height={65} />
            <span className="self-center text-blue-400 text-3xl font-black italic whitespace-nowrap dark:blue-100">YALL</span>
          </a>
          <div className="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-blue-400 rounded-lg md:hidden hover:hover:bg-blue-700  dark:text-blue-400 dark:hover:bg-blue-700" aria-controls="navbar-sticky" aria-expanded="false" onClick={handleNav}>
              <span className="sr-only">Open main menu</span>
              {navbar ? <FaArrowLeft /> : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>}

            </button>
          </div>
          <div className={navbar ? 'items-center justify-between  md:h-auto h-auto  w-full md:flex md:w-auto md:order-1' : 'items-center hidden justify-between md:h-auto h-auto  w-full md:flex md:w-auto md:order-1'} id="navbar-sticky">
            <ul onClick={handleNav} className="flex flex-col p-4 mt-4 border mb-4 border-blue-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-blue-300">
              <li>
                <a href="#work" className="block py-2 pl-3 pr-4  rounded text-blue-400 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-neutral-100 md:p-0 md:dark:hover:text-neutral-100 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-neutral-100 md:dark:hover:bg-transparent dark:border-blue-700" >About</a>
              </li>
              <li>
                <a href="#services" className="block py-2 pl-3 pr-4 text-blue-400 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-neutral-100 md:p-0 md:dark:hover:text-neutral-100 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-neutral-100 md:dark:hover:bg-transparent dark:border-blue-700" >Services</a>
              </li>
              {/* <li>
                <a href="#testimonial" className="block py-2 pl-3 pr-4 text-blue-400 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-neutral-100 md:p-0 md:dark:hover:text-neutral-100 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-neutral-100 md:dark:hover:bg-transparent dark:border-blue-700">Testimonial</a>
              </li> */}
              <li>
                <a href="#contactus" className="block py-2 pl-3 pr-4 text-blue-400 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-neutral-100 md:p-0 md:dark:hover:text-neutral-100 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-neutral-100 md:dark:hover:bg-transparent dark:border-blue-700">Join</a>
              </li>
            </ul>
            {/* <a href="#contactus" className='mb-3'>
            <button onClick={handleNav} type="button" className="text-blue-400 mt-4 border-4 hover:bg-transparent  border-blue-400 w-full  font-medium rounded-t-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 dark:bg-blue-600">Hit Us Up</button>
         </a> */}
          </div>
    
        </div>
        {/* <MobileNavBar></MobileNavBar> */}
      </nav>

    </>

  );
}

export default NavBar;

function menuLines() {
  return <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>;
}
