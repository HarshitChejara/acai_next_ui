import React from 'react';
import { freeData } from '../../../../data/free';


export default function Free() {
    return (
        <React.Fragment>
            {freeData.Free.map((free, index) => (
            <p key={index} className="flex items-center text-gray-600 mb-2">{free.content}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="alert-icon">
                    <path fill="#1ee65a" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 48c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200-110.5 0-200-89.5-200-200 0-110.5 89.5-200 200-200m140.2 130.3l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L215.3 303.7l-59.8-60.3c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3 .1-17z"/>
                </svg>
            </p>
            ))}
        </React.Fragment>
         );
    }