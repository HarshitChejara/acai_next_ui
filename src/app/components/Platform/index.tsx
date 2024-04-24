import React from 'react';
import Image from 'next/image';
import { platformData } from '../../../../data/platform';
import { targetData } from '../../../../data/target';


export default function Platform() {
    return (
        <React.Fragment>
            {platformData.Platform.map((platform, index) => (
            <div key={index} className="p-8 lg:w-1/3 md:w-1/2 hover:bg-[#F9F9F9] rounded-xl">
                <div className="py-5 h-full flex flex-col items-center text-center">
                    {platform.images && platform.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="Card" className="flex-shrink-0 rounded-lg object-cover object-center mb-4" width={600} height={500} />
                    ))}
                    <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900 mb-3">{platform.title}</h2>
                        <p className="mb-4">{platform.content}</p>
                        <span className="inline-flex">
                            {targetData.Target.map((target) => (
                                <a href={target.link} target="_blank" className="more">Learn More</a>
                            ))}
                        </span>
                    </div>
                </div>
            </div>

             ))}
        </React.Fragment>
         );
    }