import React from 'react';
import Image from 'next/image';
import { missionData } from '../../../../data/mission';


export default function Mission() {
    return (
        <React.Fragment>
            {missionData.Mission.map((mission, index) => (
            <div key={index} className="container mx-auto flex px-5 lg:px-24 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="custom-heading title-text">{mission.title}</h2>
                    <p className="mb-8 leading-relaxed text-xl">{mission.content}</p>
                </div>
                <div className="flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {mission.images && mission.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="valueCards" className="object-cover object-center rounded-2xl" width={600} height={300} />
                    ))}
                </div>
            </div>
             ))}
        </React.Fragment>
         );
    }