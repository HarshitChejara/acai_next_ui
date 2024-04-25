
import Image from "next/image";
import React from 'react';



export default function Hero2() {
    return (
        <React.Fragment>
            <div className="md:w-1/2 w-5/6 container sm:px-1 px-8 sm:mr-1 mr-28 rounded-l-2xl">
                <div className="image-container relative lg:mt-96 mt-36">
                    <Image className="background object-cover absolute inset-auto lg:translate-y-[-90%] translate-y-[-80%] lg:translate-x-[55%] translate-x-[10%] rounded-l-2xl background" alt="transparenc" width={500} height={500} src="/transparenc.png"/>
                    <Image className="object-cover absolute bottom-0 rounded-2xl z-10 translate-y-[20%]" alt="import_file" width={700} height={300} src="/import_file.png"/>
                </div>
            </div>
        </React.Fragment>
         );
    }