import React from 'react';
import Image from 'next/image';
import { ourValueData } from '../../../../data/ourValue';


export default function OurValue() {
    return (
        <React.Fragment>
            {ourValueData.OurValue.map((ourValue, index) => (
            <div key={index} className="p-4 lg:w-1/2 md:w-full">
                <div className="flex bg-[#F9F9F9] rounded-lg p-8 sm:flex-row flex-col">
                    <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    {ourValue.images && ourValue.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="valueCards" className="object-cover object-center rounded-2xl" width={100} height={100} />
                    ))}
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-bold mb-3">{ourValue.title}</h2>
                        <p className="leading-relaxed text-base">{ourValue.content}</p>
                    </div>
                </div>
            </div>
             ))}
        </React.Fragment>
         );
    }