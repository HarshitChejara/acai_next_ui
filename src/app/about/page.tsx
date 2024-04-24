import Image from "next/image";
import React from "react";
import OurValue from "../components/OurValue";
import { Button } from "@nextui-org/react";
import Mission from "../components/Mission";


export default function AboutUs() {
    return (
    <React.Fragment>

        <div className="container">
          <div className="subcontainer">
            <h1 className="custom-heading title-text">About Us</h1>
            <p className="lg:w-2/3 text-xl mx-auto leading-relaxed"> Our Story: Meet the Team Behind The Accountant AI</p>
          </div>

          <div className="mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/3 w-1/2">
                <div className="flex flex-col items-center text-center">
                    <Image alt="welcome_page" className="flex-shrink-0 rounded-lg object-cover object-center" width={330} height={400} src="/welcome_page.png"/>
                </div>
            </div>
            <div className="lg:w-2/3 w-1/2 ">
                <div className="h-full flex flex-col items-center text-center">
                    <Image alt="financial_data" className="flex-shrink-0 rounded-lg object-cover object-center" width={940} height={400} src="/financial_data.png"/>
                </div>
            </div>
          </div>
        </div>



        <div className="container lg:px-24 mx-auto flex flex-wrap">
                <h2 className="custom-heading title-text mb-2 md:w-2/5">How did we
                <br className="custom-heading title-text"/>Start?</h2>
            <div className="md:w-3/5 md:pl-12">
                <p className="leading-relaxed text-base text-xl">Driven by decades of experience as Chartered Accountants, our founders recognized the industry's challenges. Fueled by a desire to innovate, they developed our product, addressing the inefficiencies of traditional accounting.</p>
                <p className="leading-relaxed text-base text-xl"> Today, as a cutting-edge startup, we leverage their expertise to provide unparalleled solutions, revolutionizing financial management for businesses.</p>
            </div>
        </div>


        <Mission />


        <div className="container lg:px-20">
          <div className="subcontainer">
            <Button className="title-button">Our values</Button>
            <div className="large-screen">
            <h1 className="custom-heading title-text">The story and values behind our company</h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <OurValue />
          </div>
        </div>
    </React.Fragment>
    );
}