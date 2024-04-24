import React from "react";
import { Button } from "@nextui-org/react";
import Features from "../components/features";
import StartTrial from "../components/StartTrial";
import Platform from "../components/Platform";
import { targetData } from '../../../data/target';



export default function FeaturesPage() {
    return (
    <React.Fragment>
        <section className="text-gray-600 body-font border-b border-gray-200">
            <div className="container px-5 sm:px-20 mb-10">
                <div className="subcontainer">
                <h1 className="custom-heading title-text">Features</h1>
                <p className="lg:w-2/3 text-xl mx-auto leading-relaxed">Discover our innovative product, Accountant AI, designed to streamline and automate your accounting processes. Say goodbye to manual tasks and hello to efficiency.</p>
                </div>
                <div className="subcontainer">
                    <Button className="title-button">Analytics</Button>
                    <div className="large-screen">
                    <h1 className="custom-heading title-text">Simple Accounting to advanced accounting automation</h1>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Features />
                </div>
            </div>
        </section>


        <div className="container">
            <div className="subcontainer">
                <Button className="title-button">Integration</Button>
                <div className="large-screen">
                <h1 className="custom-heading title-text">Connect all your tools and work efficiently.</h1>
                </div>
            </div>
            <div className="flex flex-wrap -m-4 lg:px-32">
                <Platform />
            </div>
            <div className="items-center text-center">
                {targetData.Target.map((target, index) => (
                    <a key={index} href={target.link} target="_blank">
                        <Button className="custom-button mt-10">Get Started</Button>
                    </a>
                ))}
            </div>
        </div>


        <div className="container lg:px-24">
            <StartTrial />
        </div>
    </React.Fragment>
    );
}