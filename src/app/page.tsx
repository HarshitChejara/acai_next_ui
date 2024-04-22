import "./globals.css";
import { Button } from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";
import CustomCard from "./components/CustomCard";
import CustomTabs from "./components/CustomTabs";
import Productivity from "./components/Productivity";






export default function Home() {
  return (
    <>

    <div className="features-container">
      <div className="features-subcontainer">
        <Button className="title-button" disabled>
          Features
        </Button>
        <h1 className="custom-heading title-font">Powerful features to boost</h1>
        <h1 className="custom-heading title-font"> your productivity</h1>
      </div>
      <div className="card-flex">
      <Spacer x={8} />
      <CustomCard />
      <Spacer x={8} />
      </div>
    </div>


   
        <div className="work-container">
        <Button className="title-button" disabled>
          How It Work
        </Button>
        <h1 className="custom-heading title-font">How Accountant AI will ease</h1>
        <h1 className="custom-heading title-font">the accounting system</h1>
        </div>
        <CustomTabs />




        <div className="content-container">
        <div className="content-title">
        <Button className="title-button" disabled>
          Features
        </Button>
        <h1 className="custom-heading title-font">Powerful features to boost</h1>
        <h1 className="custom-heading title-font">your productivity</h1>
        </div>
        <Productivity />
    </div>

    


  </>
  );
}
