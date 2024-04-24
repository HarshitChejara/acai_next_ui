"use client";

import Image from "next/image";
import React from 'react';
import { Button } from "@nextui-org/react";
import { articlesData } from '../../../../data/articles';
import { targetData } from '../../../../data/target';


export default function Articles() {
    return (
        <React.Fragment>
            {articlesData.Articles.map((articles, index) => (
            <div key={index} className="lg:p-4 p-2 md:w-1/3">
                <div className="h-full bg-[#F9F9F9] rounded-2xl overflow-hidden">
                <div className="p-6 relative rounded-lg">
                    {articles.images && articles.images.map((image, imgIndex) => (
                        <Image key={imgIndex} src={image} alt="blog" className="lg:h-64 md:h-36 w-full object-cover object-center rounded-2xl" width={300} height={200} />
                    ))}
                    <div className="absolute bottom-0 flex mb-8">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank">
                            <Button className="articles-button">{articles.button1}</Button>
                            <Button className="articles-button">{articles.button2}</Button>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{articles.date}</h2>
                    <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">{articles.title}</h1>
                    <p className="leading-relaxed mb-3">{articles.content}</p>
                    <div className="flex items-center flex-wrap ">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank" className="more">Read More</a>
                    ))}
                    </div>
                </div>
                </div>
            </div>
             ))}
        </React.Fragment>
         );
    }