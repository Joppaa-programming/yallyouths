"use client"; // th
import Image from 'next/image';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import { useState } from 'react';
import LeftService from './leftService';
import RightService from './rightService';


export default function Services() {
    return (
        <section id='services' className="bg-slate-50 dark:bg-slate-50 pt-2">
            {/* Mobile software development  */}
          
              
                <RightService
                src="https://res.cloudinary.com/dfhcjbewi/image/upload/v1690576370/entrepreneurship-secure-future-africa-youth-key-image_itgopy.png"
                    title="OUR MISSION"
                    description="YALL is a dynamic network of leaders dedicated to raising funds for positive social and environmental change. Through these funds, we empower and support young minds to harness their innovation and entrepreneurship, enabling them to address local challenges with inspiring solutions. Together, we cultivate a brighter future for all."
                    buttonText="JOIN US"
                    link='#contactus'
                />
          
            {/* Social media marketing  */}
        
            <LeftService
            src="https://res.cloudinary.com/dfhcjbewi/image/upload/v1690584680/impact_yerk36.jpg" 
                title="OUR IMPACT"
                description="At YALL, we've already made a positive impact by providing food supplies to several foster homes and orphanages. Now, we're committed to expanding and enhancing our services together. Currently, we support three homes, each housing more than ten children. Our future plans include implementing online classes and educational suites to foster their learning and development further. With your support, we can continue transforming lives and nurturing a brighter future for these deserving children."
                buttonText="OUR YOUTUBE"
            link="https://www.youtube.com/@YouthAssociationOfLandlordsYAL"
                />
    
            {/* Search Engine Optimization (SEO) Specialist */}
           
            <LeftService 
            src="https://res.cloudinary.com/dfhcjbewi/image/upload/v1690584860/vision_egswnz.jpg"
                title="OUR VISION"
                description="At YALL, our vision is to be a driving force in empowering youth worldwide, transforming every young individual's aspirations into achievements. Through captivating media, an unwavering commitment to positive change, and innovative fundraising, we cultivate a brighter future for all. As a dynamic network of leaders, we aim to create a global movement for youth empowerment, fostering a world where young minds are inspired, supported, and equipped to address local challenges with inspiring solutions. Together, we strive to make a lasting and profound difference in the lives of young people, nurturing a world where their potential knows no bounds."
                buttonText="BOOK YOUR CONSULTATION"
                link="#contactus"
                />
         
            {/* Photography/Videography  */}
        </section>
    );

}