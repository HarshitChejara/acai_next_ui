import React from 'react';
import { termofUseData } from '../../../../data/termofUse';


export default function TermOfUse() {
    return (
        <React.Fragment>
            {termofUseData.TermOfUse.map((termofUse, index) => (
            <div key={index}>
                <p className="mt-10 text-lg">
                    <span className="custom-text">{termofUse.title}</span>
                    &nbsp;{termofUse.content}
                </p>
            </div>
             ))}
        </React.Fragment>
         );
    }