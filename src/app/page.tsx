import "./globals.css";
import { Button } from "@nextui-org/react";
// import {Spacer} from "@nextui-org/react";
// import CustomCard from "./components/CustomCard";
import CustomTabs from "./components/CustomTabs";
import Productivity from "./components/Productivity";
import Articles from "./components/Articles/page";
import Numbers from "./components/Numbers";
import StartTrial from "./components/StartTrial";
import Integrations from "./components/Integrations";
import Features from "./components/features";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import { targetData } from '../../data/target';




export default function Home() {
  return (
    <>
      <div className="container mx-auto flex px-5 lg:px-20 py-26 lg:mt-10 mb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">A platform built for intelligent Accounting</h1>
          <p className="mb-8 leading-relaxed text-lg">What would you like to manage with theaccountantai.com</p>
          <div className="flex justify-center">
            {targetData.Target.map((target, index) => (
                <a key={index} href={target.link} target="_blank">
                    <Button className="custom-button">Get Started</Button>
                </a>
            ))}
          </div>
        </div>
       <Hero1 />
      </div>


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 lg:px-16 lg:py-32 py-24 md:flex-row flex-col items-center">
          <div className="bg-[#F1F1F1] px-10 py-24 rounded-xl lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Your Automated Accountant that manages your Accounts in your way</h1>
            <p className="mb-8 leading-relaxed text-lg">Streamline your accounting needs, efficiency, and productivity by customizing any workflow to fit your needs. Import any IMG/CSV/EXCEL/PDF/WORD file or from your own software API.</p>
            <div className="flex justify-center">
              {targetData.Target.map((target, index) => (
                  <a key={index} href={target.link} target="_blank">
                      <Button className="custom-button">Get Started</Button>
                  </a>
              ))}
            </div>
          </div>
          <Hero2 />
        </div>
      </section>


    {/* <div className="container">
      <div className="subcontainer">
        <Button className="title-button" disabled>
          Features
        </Button>
        <h1 className="custom-heading title-text">Powerful features to boost</h1>
        <h1 className="custom-heading title-text"> your productivity</h1>
      </div>
      <div className="card-flex">
      <Spacer x={8} />
      <CustomCard />
      <Spacer x={8} />
      </div>
    </div> */}


          <div className="container sm:px-20">
            <div className="subcontainer">
              <Button className="title-button">Features</Button>
              <div className="large-screen">
              <h1 className="custom-heading title-text">Powerful features to boost your productivity</h1>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <Features />
            </div>
          </div>


          <div className="container">
              <div className="subcontainer">
              <Button className="title-button" disabled>
                How It Work
              </Button>
              <div className="large-screen">
              <h1 className="custom-heading title-text">How Accountant AI will ease the accounting system</h1>
              </div>
              </div>
              <CustomTabs />
          </div>


          <div className="text-white py-12 body-font">
            <div className="container background sm:py-12 py-5 sm:px-42 mx-auto">
              <div className="flex flex-col items-center text-center w-full mb-20">
                {targetData.Target.map((target, index) => (
                  <a key={index} href={target.link} target="_blank">
                      <Button className="custom-button mb-4">Try now</Button>
                  </a>
                ))}
                <h1 className="sm:text-6xl text-3xl font-bold mb-4">Lets talk about Numbers!</h1>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <Numbers />
              </div>
            </div>
          </div>


          <div className="container sm:px-32">
              <div className="subcontainer">
                <Button className="title-button">Our Integrations</Button>
                <div className="large-screen">
                <h1 className="custom-heading title-text">The Accountant AI Integrations with other platforms</h1>
                </div>
              </div>
              <div className="flex flex-wrap text-center bg-[#F7F7FA] rounded-2xl sm:py-12">
                <Integrations />
              </div>
          </div>
          <div className="items-center text-center">
            {targetData.Target.map((target, index) => (
                <a key={index} href={target.link} target="_blank">
                    <Button className="custom-button">Get Started</Button>
                </a>
            ))}
          </div>


          <div className="container">
              <div className="subcontainer">
                <Button className="title-button" disabled>
                  Features
                </Button>
                <div className="large-screen">
                <h1 className="custom-heading title-text">Powerful features to boost your productivity</h1>
                </div>
              </div>
              <Productivity />
          </div>


          <div className="container">
            <div className="subcontainer">
              <Button className="title-button" disabled>
                 Blog
              </Button>
              <h1 className="custom-heading title-text">Most popular articles</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <Articles />
            </div>
          </div>


          <div className="container lg:px-24">
            <StartTrial />
          </div>

  </>
  );
}
