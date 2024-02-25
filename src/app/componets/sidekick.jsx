"use client"; // th
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Flag from 'react-world-flags'

export default function Sidekick() {

    return (
        <section id='work' className=" bg-slate-50 pt-20">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:py-16 lg:px-6">
                <div className="font-light 'text-blue-900 sm:text-lg dark:text-blue-900">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-400 dark:text-blue-400 ">Join us ! As we dive into meaningful projects and initiatives, creating positive change in our community! 
</h2>
                    <p className="mb-4 ">At YALL, we are passionately dedicated to empowering youth worldwide through fundraising and local initiatives. Our mission is to help young individuals thrive by turning their aspirations into achievements. Through captivating videos, impactful stories, and unwavering commitment to positive change, we aspire to create a brighter future for all. Join us on this transformative journey and be a vital part of the global movement for youth empowerment. Together, we can make a lasting and profound difference!
</p>
                </div>
                <div className="grid gap-10 items-center grid-cols-3  md:grid-cols-3 md:gap-3 mt-15 justify-items-center ">
                <Flag code="gmb" height="68" />
                <Flag code="gbr" height="68" />
                <Flag code="ukr" height="68" />
                <Flag code="sa" height="68" />
                <Flag code="isr" height="68" />
                <Flag code="usa" height="68" />
                <Flag code="sle" height="68" />
                <Flag code="sy" height="68" />
                <Flag code="se" height="68" />
                </div>
            </div>
        </section>
    )

}