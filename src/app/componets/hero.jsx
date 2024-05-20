"use client"; // th
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import { useState } from 'react';
import Slider from './slider';



export default function Hero() {
    return (
       
            <div className="hero">
                <div className=''>
                    <video autoPlay muted loop className='hero-video'>
                        <source src="https://res.cloudinary.com/digital-cats/video/upload/v1690573467/YALL_Transforming_Lives__Food_Pack_Distribution_by_Youth_Association_of_Landlords_Charity_in_Gambia_j6y5x5.mp4" />
                        {/* <source src="https://makeagency.co.uk/wp-content/uploads/2023/01/MAKE-SHOWREEL-PREVIEW.mp4" /> */}
                    </video>
                </div>
                {/* overlay */}
                <div className='opacity-70 w-full h-full bg-black  relative'>

                    <div className="container bottom-0 hero-content opacity-100  flex absolute flex-col items-center  ">
                        <div className="w-full mt-6 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <span className='text-5xl sm:text-6xl md:text-6xl lg:text-8xl  text-center text-slate-50  font-black'>
                                <h1 className=" xl:text-6xl lg:text-6xl">
                                    youth
                                </h1>
                                <h1 className="xl:text-6xl lg:text-6xl" >
                                    association of
                                </h1>
                            </span><span className="text-slate-50">
                                <h1 className=" text-center font-black xl:text-6xl lg:text-6xl" >
                                    landlords
                                </h1></span>
                        </div>
                        <div className="w-full flex mt-2 justify-center items-center">
                            <span className=''>
                                <a href="#contactus" >
                                    <button className="hover:bg-red-800 hover:p-2 transition duration-150 ease-in-out lg:text-xl lg:font-bold   text-red-400 px-4 sm:px-10 border-4 border-red-400 py-2 sm:py-4 text-sm"> Donate</button>
                                </a>
                                <a href="#work" className='mb-3'>
                                    <button className="ml-4 hover:bg-blue-800 hover:p-2 lg:text-xl lg:font-bold  text-blue-400 px-4 sm:px-10 border-4 border-blue-400 py-2 sm:py-4 text-sm">About Us</button>
                                </a> {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 bg-transparent transition duration-150 ease-in-out hover:border-green-600 lg:text-xl lg:font-bold  hover:text-green-600 rounded border border-green-700 text-green-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">About Us</button> */}
                            </span>
                        </div>

                        {/* logos scroll */}

                        <div className='pt-[390px]'>
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        
    )


}