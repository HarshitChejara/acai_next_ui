import Image from "next/image";
import React from 'react';
import { Button } from "@nextui-org/react";
import { targetData } from '../../../../data/target';


export default function StartTrial() {
    return (
        <React.Fragment>
            <div className="background mx-auto rounded-3xl flex sm:px-16 py-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-3 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font lg:text-5xl text-3xl mb-12 font-medium text-white">Streamline your accounting
                        <br className="hidden lg:inline-block"/>system with The Accountant AI
                    </h1>
                    <div className="flex justify-center mt-8">
                        {targetData.Target.map((target, index) => (
                            <a key={index} href={target.link} target="_blank">
                                <Button className="inline-flex text-black font-medium bg-white py-2 px-14 focus:outline-none rounded-xl text-lg">Start Trial</Button>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded ml-auto animate-spin" alt="hero" width={300} height={300} src="/circle_frame.png"/>
                </div>
            </div>
        </React.Fragment>
         );
    }