"use client";

import React from "react";
import Image from "next/image";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Button } from "@nextui-org/react";
import { customTabsData } from '../../../../data/customTabs';
import { targetData } from '../../../../data/target';


export default function CustomTabs() {


  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{ style: { backgroundColor: '#4285f4' } }}
      >
        <Tab
          disableRipple
          label={
            <div className="tab">
              <div className="tab-button">01. Create account</div>
            </div>
          }
          sx={{ '&.Mui-selected': { color: '#4285f4' } }}
        />
        <Tab
          disableRipple
          label={
            <div className="tab">
              <div className="tab-button">02. Automate accounting</div>
            </div>
          }
          sx={{ '&.Mui-selected': { color: '#4285f4' } }}
        />
        <Tab
          disableRipple
          label={
            <div className="tab">
              <div className="tab-button">03. Sit back and relax!</div>
            </div>
          }
          sx={{ '&.Mui-selected': { color: '#4285f4' } }}
          {...a11yProps(1)}
        />
      </Tabs>
      </div>



      {value === 0 && (
        <>
        {customTabsData.CustomTabs.map((customTabs, index) => (
          <div key={index} className="lg:px-56">
            {index === 0 && (
            <div className="container mx-auto flex md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                <div className="flex">
                  <Image className="object-cover object-center rounded sm:mr-5 h-20 w-20" width={50} height={50} alt="hero" src="/user_icon.png"/>
                  <h1 className="title-font lg:text-4xl text-2xl mb-4 font-medium text-gray-900 sm:ml-5 ml-5">{customTabs.title}</h1>
                </div>
                <p className="mb-8 leading-relaxed text-lg lg:mt-10 sm:mt-5 mt-5">{customTabs.content}</p>
                <div className="flex justify-center">
                  {targetData.Target.map((target) => (
                      <a key={index} href={target.link} target="_blank">
                        <Button className="inline-flex text-white bg-[#242331] py-2 px-6 rounded text-lg">Get Started</Button>
                      </a>
                  ))}
                </div>
              </div>
              <div className="lg:max-w-lg w-full md:w-1/2 w-5/6" style={{ width: '20rem' }}>
                {customTabs.images && customTabs.images.map((image, imgIndex) => (
                    <Image key={imgIndex} src={image} alt="hero1" className="object-cover object-right rounded" width={300} height={200} />
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
        </>
      )}




      {value === 1 && (
        <>
        {customTabsData.CustomTabs.map((customTabs, index) => (
          <div key={index} className="lg:px-56">
            {index === 1 && (
            <div className="container mx-auto flex md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                <div className="flex">
                  <Image className="object-cover object-center rounded sm:mr-5 h-20 w-20" width={50} height={50} alt="hero" src="/user_icon.png"/>
                  <h1 className="title-font lg:text-4xl text-2xl mb-4 font-medium text-gray-900 sm:ml-5 ml-5">{customTabs.title}</h1>
                </div>
                <p className="mb-8 leading-relaxed text-lg lg:mt-10 sm:mt-5 mt-5">{customTabs.content}</p>
                <div className="flex justify-center">
                  {targetData.Target.map((target) => (
                      <a key={index} href={target.link} target="_blank">
                        <Button className="inline-flex text-white bg-[#242331] py-2 px-6 rounded text-lg">Get Started</Button>
                      </a>
                  ))}                </div>
              </div>
              <div className="lg:max-w-lg w-full md:w-1/2 w-5/6" style={{ width: '20rem' }}>
                {customTabs.images && customTabs.images.map((image, imgIndex) => (
                    <Image key={imgIndex} src={image} alt="hero1" className="object-cover object-right rounded" width={300} height={200} />
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
        </>
      )}





      {value === 2 && (
        <>
        {customTabsData.CustomTabs.map((customTabs, index) => (
          <div key={index} className="lg:px-56">
            {index === 2 && (
            <div className="container mx-auto flex md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                <div className="flex">
                  <Image className="object-cover object-center rounded sm:mr-5 h-20 w-20" width={50} height={50} alt="hero" src="/user_icon.png"/>
                  <h1 className="title-font lg:text-4xl text-2xl mb-4 font-medium text-gray-900 sm:ml-5 ml-5">{customTabs.title}</h1>
                </div>
                <p className="mb-8 leading-relaxed text-lg lg:mt-10 sm:mt-5 mt-5">{customTabs.content}</p>
                <div className="flex justify-center">
                  {targetData.Target.map((target) => (
                      <a key={index} href={target.link} target="_blank">
                        <Button className="inline-flex text-white bg-[#242331] py-2 px-6 rounded text-lg">Get Started</Button>
                      </a>
                  ))}                </div>
              </div>
              <div className="lg:max-w-lg w-full md:w-1/2 w-5/6" style={{ width: '20rem' }}>
                {customTabs.images && customTabs.images.map((image, imgIndex) => (
                    <Image key={imgIndex} src={image} alt="hero1" className="object-cover object-right rounded" width={300} height={200} />
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
        </>
      )}



    </>
  );
}
