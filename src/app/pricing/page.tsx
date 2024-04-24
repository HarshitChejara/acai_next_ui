"use client";

import React from "react";
import Integrations from "../components/Integrations";
import Faq from "../components/Faq";
import { Button } from "@nextui-org/react";
import Free from "../components/Pricing/free";
import Starter from "../components/Pricing/starter";
import Growth from "../components/Pricing/growth";
import Enterprise from "../components/Pricing/enterprise";
import { targetData } from '../../../data/target';



export default function Pricing() {

    return (
    <React.Fragment>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container lg:px-28">
        <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-5xl text-3xl font-bold title-font mb-5 text-gray-900">Supercharge your teamwork. Start <span className="more">free</span></h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl text-gray-500">Unlimited file imports and inteligent accounting. No credit card needed.</p>
            <div className="flex mx-auto overflow-hidden py-8">
            {targetData.Target.map((target) => (
                <a href={target.link} target="_blank"><Button className="custom-button">Get Started</Button></a>
            ))}
            </div>
        </div>
        <div className="flex flex-wrap -m-4">

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="price-container">
                <h2 className="custom-text lg:text-2xl mb-1">Free</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-5">
                    <span>10</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">Imports / month</span>
                </h1>
                <h2 className="custom-text">Free Forever</h2>
                    <div className="items-left py-3">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank"><Button className="pricing-button">Try for free</Button></a>
                    ))}
                    </div>
                    <p className="text-gray-500 text-lg">For Companies looking to keep track of their accounting</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="custom-text lg:text-2xl mb-4">Free plan includes:</h1>
                <Free />
            </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="price-container">
            <span className="starter-background text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>

                <h2 className="custom-text lg:text-2xl mb-1">Starter</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4">
                    <span className="starter-text">500</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">Imports / month</span>
                </h1>
                <h2 className="custom-text">Total $90 / month</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank"><Button className="pricing-button">Get Plan</Button></a>
                    ))}
                    </div>
                    <p className="text-gray-500 text-lg">Automate all your data entry in one place.</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="custom-text lg:text-2xl mb-4">Includes Free plus:</h1>
                <Starter />
            </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="price-container">
            <span className="growth-background text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>
                <div className="inline-flex">
                    <h2 className="custom-text lg:text-2xl mb-1">Growth</h2>
                    <Button className="growth-background text-white ml-auto rounded p-1">Most Popular</Button>
                </div>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4">
                    <span className="growth-text">1000</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">Imports / month</span>
                </h1>
                <h2 className="custom-text">Total $160 / month</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank"><Button className="pricing-button">Get Plan</Button></a>
                    ))}
                    </div>
                    <p className="text-gray-500 text-lg">Automate and optimize your accounting processes</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="custom-text lg:text-2xl mb-4">Includes Starter plus:</h1>
                <Growth />
           </div>
        </div>

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="price-container">
              <span className="enterprise-background text-white w-full py-1 tracking-widest text-xs absolute right-0 top-0 rounded-blr"></span>
                <h2 className="custom-text lg:text-2xl mb-1">Enterprise</h2>
                <h1 className="text-5xl pb-4">
                    <span className="enterprise-text">Custom</span>
                </h1>
                <h2 className="custom-text">Book demo today</h2>
                    <p className="text-gray-500">Billed annually</p>
                    <div className="items-left py-3">
                    {targetData.Target.map((target) => (
                        <a href={target.link} target="_blank"><Button className="pricing-button">Get Plan</Button></a>
                    ))}
                    </div>
                    <p className="text-gray-500 text-lg">Streamline and run the complex workflows of your organization</p>
                <span className="inline-block h-1 w-50 rounded bg-gray-300 mt-28 mb-5"></span>
                <h1 className="custom-text lg:text-2xl mb-4">Includes Growth plus:</h1>
                <Enterprise />
            </div>
        </div>

        </div>
    </div>
    </section>



    <div className="container lg:px-32">
        <div className="flex flex-wrap text-center sm:px-12 bg-[#F7F7FA] rounded-2xl">
            <div className="flex flex-col text-center w-full py-8 px-14">
                <h1 className="custom-heading title-text">Our integrations with other workspaces</h1>
            </div>
            <Integrations />
        </div>
    </div>


    <section className="text-gray-800 bg-[#F9F9F9] body-font">
      <div className="py-24 lg:px-72 px-5">
      <h1 className="custom-heading title-text text-center">Frequently Asked Questions</h1>
        <Faq />
      </div>
    </section>


    <div className="container">
        <div className="subcontainer">
        <h1 className="custom-heading title-text">Start using theaccountantai.com today</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">Try it now for free / No credit card needed</p>
            <div className="flex mx-auto overflow-hidden mt-6">
                {targetData.Target.map((target) => (
                    <a href={target.link} target="_blank"><Button className="custom-button">Get Started </Button></a>
                ))}
            </div>
        </div>
    </div>
   </React.Fragment>
  );
}