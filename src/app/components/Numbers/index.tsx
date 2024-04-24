import React from 'react';
import { numbersData } from '../../../../data/numbers';


export default function Numbers() {
    return (
        <React.Fragment>
            {numbersData.Numbers.map((numbers, index) => (
            <div key={index} className="border-r-2 border-[#00CA72] p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6">
                    <h2 className="font-bold lg:text-5xl text-4xl mb-5">{numbers.number}</h2>
                    <p className="leading-relaxed">{numbers.content}</p>
                </div>
            </div>
             ))}
        </React.Fragment>
         );
    }