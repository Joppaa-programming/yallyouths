
"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavBar from './componets/nav';
import Sidekick from './componets/sidekick';
import Testimonial from './componets/testimonials';
import ContactUs from './componets/contact-us';
import Hero from './componets/hero';
import Services from './componets/services';
import ContactMe from './componets/contact';
import Footer from './componets/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
   <div>
      <Hero/>
      <Sidekick />
      <Services/>
      <ContactUs />
      </div>
      <Footer/>
     

    </>

  );
}
