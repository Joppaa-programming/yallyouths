
import Link from "next/link";

export default function MobileNavBar() {
    return (
<div className="items-center z-30 justify-between  md:hidden" id="navbar-sticky">
<ul className=" p-4 mt-4 border   rounded-lg bg-neutral-800 border-neutral-700">
  <li>
 
    <a href="#work" className="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100  dark:text-neutral-400  dark:hover:text-neutral-100 dark:hover:bg-transparent dark:border-neutral-700" >Work</a>

  </li>
  <li>
    <a href="#services" className="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100  dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 dark:border-neutral-700" >Services</a>
  </li>
  <li>
    <a href="#testimonial" className="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100  dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 dark:border-neutral-700">Testimonial</a>
  </li>
  <li>
    <a href="#join" className="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100  dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 dark:border-neutral-700">Join</a>
  </li>
</ul>
<button type="button" className="text-neutral-100 bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Contact Us</button>
</div>
    )};