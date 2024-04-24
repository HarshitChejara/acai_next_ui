
import Image from "next/image";
import React from 'react';



export default function Hero1() {
    return (
        <React.Fragment>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:pl-1 pl-9 sm:mb-1 mb-16">
                <div className="image-container relative sm:mt-1 mt-24">
                    <Image className="object-cover absolute top-0 right-0 rounded-lg lg:translate-x-[-40%] translate-x-[-10%] z-10" alt="hero3" width="250" height="300" src="/hero3.png"/>
                    <Image className="object-cover absolute bottom-0 translate-y-[-100%] lg:translate-x-[-100%] z-10 py-3 lg:ml-5" alt="hero4" width="30" height="30" src="/hero4.png"/>
                    <Image className="animate-pulse object-cover absolute bottom-0 rounded-lg translate-y-[10%] lg:translate-x-[30%] sm:translate-x-[-1%] translate-x-[-45%] z-10" alt="hero1" width="220" height="300" src="/hero1.png"/>
                    <Image className="animate-pulse object-cover absolute bottom-0 right-0 rounded-lg translate-y-[40%] lg:translate-x-[0%] translate-x-[20%] z-10" alt="hero2" width="280" height="300" src="/hero2.png"/>
                </div>
            </div>
        </React.Fragment>
         );
    }