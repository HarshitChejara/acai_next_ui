
import Image from "next/image";
import React from 'react';
import { featuresData } from '../../../../data/features';
import { targetData } from '../../../../data/target';


export default function Features() {
    return (
        <React.Fragment>
            {featuresData.Features.map((features, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 hover:bg-[#F9F9F9] rounded-xl hover:translate-y-12">
                <div className="py-5 h-full flex flex-col items-center text-center">
                    {features.images && features.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="item" className="flex-shrink-0 rounded-lg object-cover object-center mb-4" width={250} height={250} />
                    ))}
                    <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900 mb-3">{features.title}</h2>
                        <p className="mb-4">{features.content}</p>
                        <span className="inline-flex">
                            {targetData.Target.map((target) => (
                                <a key={index} href={target.link} target="_blank" className="more">Try now</a>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
            ))}
        </React.Fragment>
         );
    }