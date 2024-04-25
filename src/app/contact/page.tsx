"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Image from "next/image";
import { Button } from '@nextui-org/react';
// import {Input} from "@nextui-org/react";


export default function Contact() {


const [Full_Name, setFullName]=useState('');
const [Email, setEmail]=useState('');
const [Company, setCompany]=useState('');
const [Subject, setSubject]=useState('');
const [Message, setMessage]=useState('');



const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(Full_Name,Email,Company,Subject,Message);
    const data={
        Full_Name:Full_Name,
        Email:Email,
        Company:Company,
        Subject:Subject,
        Message:Message
    };
    axios.post('https://sheet.best/api/sheets/61fb6db0-5339-4006-9609-0bb9c495bd57',data).then((response)=>{
        // console.log(response);
        setFullName('');
        setEmail('');
        setCompany('');
        setSubject('');
        setMessage('');
    })
}


    const handleSuccessClick = () => {
        Swal.fire('Success!', 'Your data has been Submitted.', 'success');
    }


    return (
    <React.Fragment>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 lg:px-44">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="custom-heading title-text">Get in touch today!</h1>
        </div>



    <div className="flex flex-wrap -m-4 mb-10">
    <div className="p-4 md:w-1/2">
      <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 flex-col bg-white shadow-lg">
        <div className="flex items-center">
          <div className="lg:w-16 lg:h-16 w-14 h-14 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <Image alt="team" className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-2xl mr-4" width={70} height={70} src="/mail_icon.png"/>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium mr-1">Mail Us</h2>
          <h2 className="text-gray-900 lg:text-lg ml-auto"><a href="mailto:product@theaccountantai.com">product@theaccountantai.com</a></h2>
        </div>
      </div>
    </div>

    <div className="p-4 md:w-1/2">
      <div className="flex rounded-lg h-full bg-gray-100 lg:p-8 p-4 flex-col bg-white shadow-lg">
        <div className="flex items-center">
          <div className="lg:w-16 lg:h-16 w-14 h-14 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <Image alt="team" className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-2xl mr-4" width={70} height={70} src="/call_icon.png"/>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium mr-1">Call Us</h2>
          <h2 className="text-gray-900 text-lg ml-auto"><a href="tel:+4256812573">+1 (425) 681-2573</a></h2>
        </div>
      </div>
    </div>
    </div>




        <div className="shadow-xl">
        <div className="sm:p-32 p-4">
        <form className="form-group" onSubmit={handleSubmit} >
          <div className="flex flex-wrap -m-2 ">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Full_Name" className="leading-7 text-sm text-black font-medium">Full Name *</label>
                <input type="text" id="Full_Name" name="Full_Name" onChange={(e)=>setFullName(e.target.value)} value={Full_Name} required className="custom-input"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Email" className="leading-7 text-sm text-black font-medium">Your Email *</label>
                <input type="email" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} required  className="custom-input"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Company" className="leading-7 text-sm text-black font-medium">Company *</label>
                <input type="text" id="Company" name="Company" onChange={(e)=>setCompany(e.target.value)} value={Company} required className="custom-input"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Subject" className="leading-7 text-sm text-black font-medium">Subject *</label>
                <input type="text" id="Subject" name="Subject" onChange={(e)=>setSubject(e.target.value)} value={Subject} required className="custom-input"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="Message" className="leading-7 text-sm text-black font-medium">Message *</label>
                <textarea id="Message" name="Message" onChange={(e)=>setMessage(e.target.value)} value={Message} required className="custom-input"></textarea>
              </div>
            </div>
            <div className="w-full mt-10 text-center">
              <Button type="submit" onClick={handleSuccessClick} className="custom-button">Send Message</Button>
            </div>

          </div>
          </form>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
    );
}