
import Image from "next/image";
import React from 'react';
import { integrationData } from '../../../../data/integration';


export default function Integrations() {
    return (
        <React.Fragment>
            {integrationData.Integration.map((integration, index) => (
            <div key={index} className="p-4 md:w-1/5 w-1/2">
                <div className="p-5 rounded-lg inline-block bg-white rounded-2xl shadow-lg hover:translate-y-2">
                    <a href={integration.link} target="_blank">
                    {integration.images && integration.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="integration" className="object-cover object-center rounded w-full h-12" width={70} height={70} />
                    ))}
                    </a>
                </div>
            </div>
            ))}
        </React.Fragment>
         );
    }