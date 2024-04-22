"use client";

import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { productivityData } from '../../../../data/productivity';


export default function Productivity() {
    return (
        <React.Fragment>
            {productivityData.Productivity.map((productivity, index) => (
            <div key={index} className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    {/* <Image className="object-cover object-center rounded" width={400} height={400} alt="hero" src="/task1.png"/> */}
                    {productivity.images && productivity.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="Card background" className="object-cover object-center rounded" width={400} height={400} />
                    ))}
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{productivity.title}</h1>
                    <p className="mb-8 leading-relaxed text-2xl">{productivity.content}</p>
                    <p className="mb-8 leading-relaxed text-2xl">{productivity.subcontent}</p>
                    <div className="flex justify-center">
                        <Link href="https://app.theaccountantai.com/" target="_blank"><button className="inline-flex text-white bg-[#5236FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try Now</button></Link>
                    </div>
                </div>
            </div>
            ))}
        </React.Fragment>
         );
    }