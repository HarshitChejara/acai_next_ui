"use client";

import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Button } from "@nextui-org/react";
import { targetData } from '../../../../data/target';


const Header = () => {
  return (
      <Popover className={"sticky z-50 mx-auto flex items-center lg:px-12 px-6 py-2 h-24"}>
        <div className="flex inline-flex">
          <Link href="/"><Image src="/logo.png" alt="logo" width="90" height="50"/></Link>
          <Link href="/"><h1 className="custom-text py-5">The Accountant AI</h1></Link>
        </div>

        <div className="bg-transparent md:mr-auto lg:ml-12 ml-4 text-gray-900">
          <div className="hidden sm:flex items-center justify-center gap-2 lg:gap-8 gap-4">
            <Link href="about">About Us</Link>
            <Link href="features">Features</Link>
            <Link href="terms_of_use">How to use</Link>
          </div>
        </div>
        <div className="bg-transparent md:ml-auto">
          <div className="hidden sm:flex items-center justify-center gap-2 lg:gap-8 gap-4">
            <Link href="blog">Blogs</Link>
            <Link href="pricing">Pricing</Link>
            <Link href="contact" target="_blank"><Button type="button" className="text-[#5236FF] border border-[#5236FF] rounded py-2 lg:px-5 px-1 leading-6 bg-white flex">Book Demo</Button></Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                <Link href="/"><h1 className="custom-text">The Accountant AI</h1></Link>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8 font-bold text-black focus:outline-none px-2">
                  <Link href="about">About Us</Link>
                  <Link href="features">Features</Link>
                  <Link href="terms_of_use">How to use</Link>
                  <Link href="blog">Blogs</Link>
                  <Link href="pricing">Pricing</Link>
                </nav>
              </div>

            </div>
          </div>
        </Popover.Panel>
        </Transition>

        <div className="hidden sm:block lg:px-5 px-1 py-7 h-24 ">
          {targetData.Target.map((target, index) => (
            <a key={index} href={target.link} target="_blank">
                <Button type="button" className="background flex text-white rounded py-2 lg:px-5 px-1 leading-6">Get Started</Button>
            </a>
          ))}
        </div>
      </Popover>
  );
};
export default Header;