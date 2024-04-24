"use client";

import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faqData } from '../../../../data/faq';


export default function Faq() {
    const [expandedId, setExpandedId] = useState<number | null>(null); // Specify the type as number or null

    const toggleExpand = (id: number) => { // Explicitly define the type of id as number
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <React.Fragment>
            {faqData.Faq.map((faq, index) => (
                <div key={index} className="flex justify-center">
                    <div className="w-full rounded-3xl">
                        <input type="checkbox" id={`faq-${index}`} className="absolute peer opacity-0" />
                        <div className="flex items-center flex-wrap mt-auto w-full border-b border-gray-200 py-5">
                            <label htmlFor={`faq-${index}`} className="flex items-center p-3 inline-flex text-xl cursor-pointer" onClick={() => toggleExpand(index)}>
                                {faq.title}
                            </label>
                            <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3">
                                <label htmlFor={`faq-${index}`}>
                                    {/* <FontAwesomeIcon icon={faChevronDown} className={`w-5 h-5 ml-auto inline-flex ${expandedId === index ? 'rotate-180' : ''}`} /> */}
                                </label>
                            </span>
                        </div>
                        <div className={`max-h-0 overflow-hidden transition-max-height duration-300 ${expandedId === index ? 'peer-checked:max-h-full' : ''}`}>
                            <p className="p-3">{faq.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
         );
    }