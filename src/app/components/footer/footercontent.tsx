import React from 'react';
import { footerData } from '../../../../data/footer';


export default function FooterContent() {
    return (
        <React.Fragment>
            {footerData.Footer.map((footer, index) => (
            <div key={index} className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-700 text-lg mb-5">{footer.title}</h2>
                <nav className="list-none mb-10">
                    {footer.content.map((item, idx) => (
                        <li key={idx} className="mb-5">
                            <a href={item.link} className="text-gray-600 hover:text-gray-800">{item.text}</a>
                        </li>
                    ))}
                </nav>
            </div>
            ))}
        </React.Fragment>
         );
    }