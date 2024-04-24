import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";
import TermOfUse from "../components/TermOfUse";
import { targetData } from '../../../data/target';


export default function TermsOfUse() {
    return (
    <React.Fragment>

      <div className="container px-5 lg:px-32">
        <div className="subcontainer">
          <h1 className="custom-heading title-text">How to use The Accountant AI</h1>
          <p className="lg:w-2/3 text-xl text-xl mx-auto leading-relaxed">Using The Accountant AI is easy. Get started today </p>
        </div>
        <div className="container sm:px-5">
            <div className="flex flex-wrap sm:px-32 py-12 p-5 bg-[#F9F9F9] rounded-3xl">
              <div className="text-center w-full">
                <h1 className="custom-heading title-text">Getting Started with The AccountantAI</h1>
              </div>
              <Image alt="team" className="flex-shrink-0 object-cover object-center mt-10" width={990} height={400} src="/how_to_use.png"/>
              <TermOfUse />
              {targetData.Target.map((target, index) => (
                <a key={index} href={target.link} target="_blank"><Button className="mt-10 custom-button">Try Now</Button></a>
              ))}
            </div>
        </div>
      </div>

    </React.Fragment>
    );
}